import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../theme/UI/BagArea.module.scss'
import Button from './Button'
import bag from '../assets/icons/bag.svg'

function BagArea() {
  const { productsInBag } = useSelector(state => state.bag)

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

  const renderItems = productsInBag?.map(item => <img src={item.img} alt="" key={item.id} />)

  const renderNoItems = <h4>Your bag is clear, choose someone</h4>

  return (
    <div className={styles.bagArea}>
      <h2 className={styles.title}>Bag</h2>
      <div className={styles.items}>{productsInBag.length ? renderItems : renderNoItems}</div>

      {productsInBag.length !== 0 && (
        <Link to={renderBtn().to}>
          <Button img={renderBtn().img} text={renderBtn().text} />
        </Link>
      )}
    </div>
  )
}

export default BagArea
