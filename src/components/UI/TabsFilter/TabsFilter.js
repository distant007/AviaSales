import { Radio } from 'antd'
import { connect } from 'react-redux'
import './TabsFilter.scss'
const TabsFilter = (props) => (
  <Radio.Group value={props.date}>
    <Radio.Button value="CHIPEST" onClick={() => props.onChangeTabs('CHIPEST')}>
      Самый дешевый
    </Radio.Button>
    <Radio.Button value="FASTEST" onClick={() => props.onChangeTabs('FASTEST')}>
      Самый быстрый
    </Radio.Button>
    <Radio.Button value="OPTIMAl" onClick={() => props.onChangeTabs('OPTIMAl')}>
      Оптимальный
    </Radio.Button>
  </Radio.Group>
)
function mapStateToProps(state) {
  const { tabsReducer } = state
  return {
    date: tabsReducer.date,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onChangeTabs: (value) => {
      dispatch({ type: 'DEFAULTITEMS' })
      const action = { type: 'TABS/' + value }
      dispatch(action)
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabsFilter)
