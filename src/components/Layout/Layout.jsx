import { Outlet } from 'react-router-dom'
import SideBar from '../../UI/SideBar'
import BagArea from '../../UI/BagArea'

import styles from '../../theme/components/Layout/Layout.module.scss'

function Layout() {
  return (
    <div className={styles.layout}>
      <SideBar />

      <main className={styles.main}>
        <Outlet />
      </main>

      <BagArea />
    </div>
  )
}

export default Layout
