import { useSelector } from 'react-redux'

import LoaderFullData from '../UI/Loader/LoaderFullData'
import Filter from '../UI/Filter/Filter'
import TabsFilter from '../UI/TabsFilter/TabsFilter'
import AviaList from '../AviaList/AviaList'
import logo from '../../assets/images/Logo.svg'

import styles from './App.module.scss'
function App() {
  const stop = useSelector((state) => state.aviaReducer.stop)
  const loaderFullData = stop === false ? <LoaderFullData /> : null
  return (
    <div className={styles.App}>
      <img className={styles.logo} src={logo} alt="logo" />
      {loaderFullData}
      <section className={styles.main}>
        <Filter />
        <div className={styles.avia}>
          <TabsFilter />
          <AviaList />
        </div>
      </section>
    </div>
  )
}

export default App
