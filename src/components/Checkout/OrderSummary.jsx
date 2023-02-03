import { Link } from 'react-router-dom'
import styles from '../../theme/components/Checkout/OrderSummary.module.scss'
import Button from '../../UI/Button'

const orderItems = [
  { id: 1, type: 'Items:', count: '$ 5849.37' },
  { id: 2, type: 'Shipping:', count: '$ 6.99' },
  { id: 3, type: 'Estimated GST:', count: '$ 760.41' },
  { id: 4, type: 'Gift Card:', count: '$ 0.00' },
]

function OrderSummary() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.orderSummary}>
        <h5>Order Summary</h5>

        {orderItems.map(item => (
          <div className={styles.items} key={item.id}>
            <span className={styles.text}>{item.type}</span>
            <span className={styles.price}>{item.count}</span>
          </div>
        ))}

        <div className={styles.decoreLine} />

        <span className={styles.total}>Order Total: $ 6609.78 </span>
        <button className={styles.placeBtn}>Place your order</button>
      </div>
      <Link to="/bag">
        <Button text="< Back" img={false} />
      </Link>
    </div>
  )
}

export default OrderSummary
