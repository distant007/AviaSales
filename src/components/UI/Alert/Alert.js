import { Alert, Space } from 'antd'
const AlertNoTickets = (props) => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message={props.type} description={props.discription} type={props.type} showIcon />
  </Space>
)
export default AlertNoTickets
