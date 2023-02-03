import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import styles from '../theme/UI/BagArea.module.scss'
import Button from './Button'
import bag from '../assets/icons/bag.svg'

function BagArea() {
  const location = useLocation()

  const renderBtn = () => {
    if (location.pathname === '/bag') {
      return {
        to: '/checkout',
        img: bag,
        text: 'Checkout',
      }
    }
    return {
      to: '/bag',
      img: bag,
      text: 'View Bag',
    }
  }

  useEffect(() => {}, [])

  return (
    <div className={styles.bagArea}>
      <h2 className={styles.title}>Bag</h2>
      <div className={styles.items} />
      <Link to={renderBtn().to}>
        <Button img={renderBtn().img} text={renderBtn().text} />
      </Link>
    </div>
  )
}

export default BagArea
