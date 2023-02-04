/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../theme/components/Checkout/OrderSummary.module.scss'
import Button from '../../UI/Button'
import { setTotalOrder } from '../../store/bag/slice'
import { getTotalSum } from '../../utils/helpers'

// const orderItems = [
//   { id: 1, type: 'Items:', count: '$ 5849.37' },
//   { id: 2, type: 'Shipping:', count: '$ 6.99' },
//   { id: 3, type: 'Estimated GST:', count: '$ 760.41' },
//   { id: 4, type: 'Gift Card:', count: '$ 0.00' },
// ]

function OrderSummary({ totalOrder }) {
  const { res, total } = totalOrder
  console.log(res, total)

  return (
    <div className={styles.wrapper}>
      <div className={styles.orderSummary}>
        <h5>Order Summary</h5>

        {res?.map(item => (
          <div className={styles.items} key={item.id}>
            <span className={styles.text}>{item.type}</span>
            <span className={styles.price}>$ {item.count.toFixed(2)}</span>
          </div>
        ))}

        <div className={styles.decoreLine} />

        <span className={styles.total}>Order Total: $ {total.toFixed(2)} </span>
        <button className={styles.placeBtn}>Place your order</button>
      </div>
      <Link to="/bag">
        <Button text="< Back" img={false} />
      </Link>
    </div>
  )
}

export default OrderSummary
