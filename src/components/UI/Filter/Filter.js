import './AntGroup.scss'
import { Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { ALL, CHECKONE, UNSETALL } from '../../../redux/typesActions'

import styles from './Filter.module.scss'
const Filter = () => {
  const dispatch = useDispatch()
  const checkAll = useSelector((state) => state.filterReducer.checkAll)
  const defaultCheckedList = useSelector((state) => state.filterReducer.checkbox)
  const CheckboxGroup = Checkbox.Group
  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const onChange = (list) => {
    dispatch({ type: CHECKONE, payload: list })
    dispatch({ type: 'DEFAULTITEMS' })
    if (list.length === 3) {
      dispatch({ type: UNSETALL })
    }
  }
  const onCheckAllChange = (e) => {
    dispatch({ type: ALL, payload: e.target.checked ? plainOptions : [] })
  }
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={defaultCheckedList} onChange={onChange} />
    </div>
  )
}
export default Filter
