import styles from '../../theme/pages/Checkout.module.scss'

import ShippingCard from '../../components/Checkout/ShippingCard'
import PaymentCard from '../../components/Checkout/PaymentCard'
import ReviewBag from '../../components/Checkout/ReviewBag'
import OrderSummary from '../../components/Checkout/OrderSummary'

function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <ShippingCard />
          <PaymentCard />
          <ReviewBag />
        </div>
        <OrderSummary />
      </div>
    </div>
  )
}

export default Checkout
