import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from '../../theme/components/Checkout/OrderSummary.module.scss'
import Button from '../../UI/Button'

function OrderSummary() {
  const items = useSelector(state => state.bag.productsInBag)

  const itemTotalPrice = +items.reduce((prev, obj) => prev + obj.count * obj.price, 0).toFixed(2)
  const shippingPrice = +(itemTotalPrice ? 10 : 0).toFixed(2)
  const orderImpost = +((itemTotalPrice / 100) * 13).toFixed(2)
  const userGiftCard = 0
  const orderTotal = (itemTotalPrice + shippingPrice + orderImpost + userGiftCard).toFixed(2)

  return (
    <div className={styles.wrapper}>
      <div className={styles.orderSummary}>
        <h5>Order Summary</h5>
        <span>Items: $ {itemTotalPrice}</span>
        <span>Shipping: $ {shippingPrice}</span>
        <span>Estimated GST: $ {orderImpost}</span>
        <span>Gift Card: $ {userGiftCard}</span>

        <div className={styles.decoreLine} />
        <span className={styles.total}>Order Total: $ {orderTotal}</span>
        <button className={styles.placeBtn}>Place your order</button>
      </div>
      <Link to="/bag">
        <Button text="< Back" img={false} />
      </Link>
    </div>
  )
}

export default OrderSummary
