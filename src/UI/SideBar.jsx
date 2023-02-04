import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from '../theme/UI/SideBar.module.scss'

import burger from '../assets/icons/burger.svg'
import close from '../assets/icons/close.svg'
import store from '../assets/icons/store.svg'
import bag from '../assets/icons/bag.svg'
import logOut from '../assets/icons/logOut.svg'

function SideBar() {
  const [isOpen, setOpen] = useState(false)

  const burgerIcon = isOpen ? close : burger

  const toogleBurgerMenu = () => {
    setOpen(!isOpen)
  }

  const closeBurgerMenu = () => {
    setOpen(false)
  }

  const setActiveLink = ({ isActive }) =>
    isActive ? `${styles.linkItem} ${styles.activeLink}` : `${styles.linkItem}`

  return (
    <div className={`${styles.sideBar} ${isOpen && styles.activeSideBar}`}>
      <button className={styles.burger} onClick={toogleBurgerMenu}>
        <img src={burgerIcon} alt="burger" />
      </button>

      <nav className={styles.wrapper}>
        <NavLink to="/" className={setActiveLink} onClick={closeBurgerMenu}>
          <img src={store} alt="" />
          <span className={styles.linkText}>Store</span>
        </NavLink>
        <NavLink to="/bag" className={setActiveLink} onClick={closeBurgerMenu}>
          <img src={bag} alt="" />
          <span className={styles.linkText}>Bag</span>
        </NavLink>
      </nav>

      <NavLink to="/logout" className={styles.logOut} onClick={closeBurgerMenu}>
        <img src={logOut} alt="" />
        <span className={styles.linkText}>Logout</span>
      </NavLink>
    </div>
  )
}

export default SideBar
