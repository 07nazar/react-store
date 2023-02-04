import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import styles from '../../theme/components/Checkout/ShippingCard.module.scss'

const userInfo = {
  fullName: ' John Maker',
  street: '123 Plae Grond Stret',
  city: 'Vermont, California',
  coutry: 'United States of America',
}

function ShippingCard() {
  return (
    <div className={styles.shippingCard}>
      <h3>Shipping Address</h3>
      <div className={styles.infoBox}>
        <div className={styles.info}>
          <p>{userInfo.fullName}</p>
          <p>{userInfo.street}</p>
          <p>{userInfo.city}</p>
          <p>{userInfo.coutry}</p>
        </div>
        <Link to="/address">
          <Button img={false} text="Change" />
        </Link>
      </div>
    </div>
  )
}

export default ShippingCard
