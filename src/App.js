import { useSelector } from 'react-redux'

import LoaderFullData from '../src/components/UI/Loader/LoaderFullData'

import Filter from './components/UI/Filter/Filter'
import TabsFilter from './components/UI/TabsFilter/TabsFilter'
import logo from './images/Logo.svg'
import styles from './App.module.scss'
import AviaList from './components/AviaList/AviaList'
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
