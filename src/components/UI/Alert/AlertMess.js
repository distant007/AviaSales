import { Alert, Space } from 'antd'
const AlertMess = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Извините" description="Подходящих билетов не найдено" type="info" showIcon />
  </Space>
)
export default AlertMess
