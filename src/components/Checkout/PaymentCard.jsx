import { Link } from 'react-router-dom'
import Button from '../../UI/Button'

import styles from '../../theme/components/Checkout/PaymentCard.module.scss'

const cardInfo = {
  cardType: 'Mastercard ending in 1252',
  bonus: '$ 53.21 gift card balance',
}

function PaymentCard() {
  return (
    <div className={styles.paymentCard}>
      <h3>Payment Method</h3>
      <div className={styles.infoBox}>
        <div className={styles.info}>
          <p>{cardInfo.cardType}</p>
          <p>{cardInfo.bonus}</p>
        </div>

        <Link to="/payment">
          <Button img={false} text="Change" />
        </Link>
      </div>
    </div>
  )
}

export default PaymentCard
