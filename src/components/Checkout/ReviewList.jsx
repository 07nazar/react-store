import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../theme/components/Checkout/ReviewList.module.scss'
import BagItem from '../Bag/BagItem'

function ReviewList() {
  const { productsInBag } = useSelector(state => state.bag)
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(productsInBag)
      localStorage.setItem('bag', json)
    }
    isMounted.current = true
  }, [productsInBag])

  return (
    <div className={styles.reviewList}>
      {productsInBag?.map(item => (
        <div key={item.id}>
          <BagItem item={item} />
          <div className={styles.decoreLine} />
        </div>
      ))}
    </div>
  )
}

export default ReviewList
