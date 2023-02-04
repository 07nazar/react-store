/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styles from '../../theme/pages/Checkout.module.scss'

import ShippingCard from '../../components/Checkout/ShippingCard'
import PaymentCard from '../../components/Checkout/PaymentCard'
import ReviewBag from '../../components/Checkout/ReviewBag'
import OrderSummary from '../../components/Checkout/OrderSummary'
import { setTotalOrder } from '../../store/bag/slice'

function Checkout() {
  const { totalOrder, productsInBag } = useSelector(state => state.bag)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTotalOrder())
  }, [productsInBag, dispatch])

  return (
    <div className={styles.checkout}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <ShippingCard />
          <PaymentCard />
          <ReviewBag />
        </div>
        <OrderSummary totalOrder={totalOrder} />
      </div>
    </div>
  )
}

export default Checkout
