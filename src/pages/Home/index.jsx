import Catalog from '../../components/Dashboard/Catalog'
import Search from '../../components/Dashboard/Seach'

import styles from '../../theme/pages/Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Search />
      <Catalog />
    </div>
  )
}

export default Home
