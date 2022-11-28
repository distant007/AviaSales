import { Alert, Space } from 'antd'
const ErrorMess = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Error" description="This is some ERROR" type="error" showIcon />
  </Space>
)
export default ErrorMess
