/* eslint-disable indent */
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import Loader from '../UI/Loader/Loader'
import { getAviaTickets, getId } from '../../fetchApi/getAvia'
import AviaItem from '../AviaItem/AviaItem'
import AlertMess from '../UI/Alert/AlertMess'
import ErrorMess from '../UI/Alert/ErrorMess'
import AlertNoTickets from '../UI/Alert/AlertNoTickets'

import styles from './AviaList.module.scss'
const AviaList = () => {
  const tickets = useSelector((state) => state.aviaReducer.aviaDate)
  const errorIndicator = useSelector((state) => state.aviaReducer.error)
  const itemToShow = useSelector((state) => state.aviaReducer.itemToShow)
  const tabsFilter = useSelector((state) => state.tabsReducer.date)
  const stop = useSelector((state) => state.aviaReducer.stop)
  const filter = useSelector((state) => state.filterReducer.checkbox)
  const id = useSelector((state) => state.aviaReducer.id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getId())
  }, [dispatch])

  if (stop === false && id !== null) {
    dispatch(getAviaTickets(id))
  }

  const filterStops = filter.map((item) => {
    switch (item) {
      case 'Без пересадок':
        return [...tickets].filter((ticket) => ticket.segments[0].stops.length === 0)

      case '1 пересадка':
        return [...tickets].filter((ticket) => ticket.segments[0].stops.length === 1)

      case '2 пересадки':
        return [...tickets].filter((ticket) => ticket.segments[0].stops.length === 2)

      case '3 пересадки':
        return [...tickets].filter((ticket) => ticket.segments[0].stops.length === 3)

      default:
        return []
    }
  })

  const onClickButton = () => {
    dispatch({ type: 'ADDITEM' })
  }

  let filteredArr = filterStops
  if (filteredArr.length > 1) {
    filteredArr = filteredArr.reduce((one, two) => one.concat(two))
  } else if (filteredArr.length === 1) {
    filteredArr = filteredArr.flat()
  } else {
    filteredArr = []
  }

  const filterFastest = [...filteredArr].sort((a, b) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1))
  const filterChipest = [...filteredArr].sort((a, b) => (a.price > b.price ? 1 : -1))

  const filterTabs =
    tabsFilter === 'CHIPEST' ? (
      <FilteredItem tickets={filterChipest} itemToShow={itemToShow} />
    ) : tabsFilter === 'FASTEST' ? (
      <FilteredItem tickets={filterFastest} itemToShow={itemToShow} />
    ) : null
  const loader = tickets.length === 0 && errorIndicator === false ? <Loader /> : null
  const showError = errorIndicator && tickets.length === 0 ? <ErrorMess /> : null
  const alert = filterTabs === null && showError === null ? <AlertMess /> : null
  const alertNoTickets =
    filteredArr.length === 0 && showError === null && alert === null && loader === null ? <AlertNoTickets /> : null
  const button =
    alert || loader || errorIndicator === true || alertNoTickets || itemToShow > tickets.length ? null : (
      <ButtonShowMore onClickButton={onClickButton} />
    )
  return (
    <div className={styles.main}>
      {filterTabs}
      {alert}
      {showError}
      {alertNoTickets}
      {loader}
      {button}
    </div>
  )
}

const FilteredItem = ({ tickets, itemToShow }) => {
  const showCurrTickets = [...tickets].slice(0, itemToShow)
  const list = showCurrTickets.map((item) => (
    <li className={styles.item} key={uuidv4()}>
      <AviaItem price={item.price} segment={item.segments} nameImg={item.carrier} />
    </li>
  ))
  return <ul className={styles.list}>{list}</ul>
}
const ButtonShowMore = ({ onClickButton }) => {
  return (
    <Button type="primary" block={true} onClick={onClickButton}>
      Показать еще 5 билетов!
    </Button>
  )
}

export default AviaList
