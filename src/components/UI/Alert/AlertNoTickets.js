import { Alert, Space } from 'antd'
const AlertNoTickets = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Извините" description="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
  </Space>
)
export default AlertNoTickets
