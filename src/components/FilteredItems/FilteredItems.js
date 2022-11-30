/* eslint-disable indent */
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAviaTickets, getId } from '../../services/getAvia'
import AviaItem from '../AviaItem/AviaItem'

import styles from './FilteredItems.module.scss'
const FilteredItems = () => {
  const tickets = useSelector((state) => state.aviaReducer.aviaDate)
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
      <View tickets={filterChipest} itemToShow={itemToShow} />
    ) : tabsFilter === 'FASTEST' ? (
      <View tickets={filterFastest} itemToShow={itemToShow} />
    ) : null
  return filterTabs
}
const View = ({ tickets, itemToShow }) => {
  const showCurrTickets = [...tickets].slice(0, itemToShow)
  const list = showCurrTickets.map((item) => (
    <li className={styles.item} key={uuidv4()}>
      <AviaItem price={item.price} segment={item.segments} nameImg={item.carrier} />
    </li>
  ))
  return <ul className={styles.list}>{list}</ul>
}
export default FilteredItems
