import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import Loader from '../UI/Loader/Loader'
import FilteredItems from '../FilteredItems/FilteredItems'
import Alert from '../UI/Alert/Alert'

import styles from './AviaList.module.scss'
const AviaList = () => {
  const tickets = useSelector((state) => state.aviaReducer.aviaDate)
  const errorIndicator = useSelector((state) => state.aviaReducer.error)
  const itemToShow = useSelector((state) => state.aviaReducer.itemToShow)
  const checkbox = useSelector((state) => state.filterReducer.checkbox)
  const tabsFilter = useSelector((state) => state.tabsReducer.date)
  const dispatch = useDispatch()

  const onClickButton = () => {
    dispatch({ type: 'ADDITEM' })
  }

  const loader = tickets.length === 0 && errorIndicator === false ? <Loader /> : null
  const showError =
    errorIndicator && tickets.length === 0 ? <Alert discription={'Произошла какая то ошибка'} type={'error'} /> : null
  const alert =
    tabsFilter === 'OPTIMAl' && showError === null ? (
      <Alert discription={'Подходящих билетов не найдено'} type={'info'} />
    ) : null
  const alertNoTickets =
    checkbox.length === 0 && showError === null && alert === null && loader === null ? (
      <Alert discription={'Рейсов, подходящих под заданные фильтры, не найдено'} type={'info'} />
    ) : null
  const button =
    alert || loader || errorIndicator === true || alertNoTickets || itemToShow > tickets.length ? null : (
      <ButtonShowMore onClickButton={onClickButton} />
    )
  return (
    <div className={styles.main}>
      <FilteredItems />
      {alert}
      {showError}
      {alertNoTickets}
      {loader}
      {button}
    </div>
  )
}
const ButtonShowMore = ({ onClickButton }) => {
  return (
    <Button type="primary" block={true} onClick={onClickButton}>
      Показать еще 5 билетов!
    </Button>
  )
}

export default AviaList
