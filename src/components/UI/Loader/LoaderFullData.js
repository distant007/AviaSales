import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import styles from './LoaderFullDate.module.scss'
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
    }}
    spin
  />
)
const LoaderFullData = () => {
  return (
    <div className={styles.loader}>
      <Spin indicator={antIcon} />
      <p>Все данные по билетам еще загружаются</p>
    </div>
  )
}
export default LoaderFullData
