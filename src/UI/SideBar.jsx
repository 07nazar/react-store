import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from '../theme/UI/SideBar.module.scss'

import burger from '../assets/icons/burger.svg'
import close from '../assets/icons/close.svg'
import store from '../assets/icons/store.svg'
import bag from '../assets/icons/bag.svg'
import logOut from '../assets/icons/logOut.svg'

function SideBar() {
  const [isActive, setActive] = useState(false)

  const burgerIcon = isActive ? close : burger
  const toogleBurgerMenu = () => {
    setActive(!isActive)
  }

  return (
    <div className={`${styles.sideBar} ${isActive && styles.activeSideBar}`}>
      <button className={styles.burger} onClick={toogleBurgerMenu}>
        <img src={burgerIcon} alt="burger" />
      </button>

      <nav className={styles.wrapper}>
        <Link to="/" className={styles.linkItem}>
          <img src={store} alt="" />
          <span className={styles.linkText}>Store</span>
        </Link>
        <Link to="/bag" className={styles.linkItem}>
          <img src={bag} alt="" />
          <span className={styles.linkText}>Bag</span>
        </Link>
      </nav>

      <Link to="/logout" className={`${styles.linkItem} ${styles.logOut}`}>
        <img src={logOut} alt="" />
        <span className={styles.linkText}>Logout</span>
      </Link>
    </div>
  )
}

export default SideBar
