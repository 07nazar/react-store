import styles from '../../theme/components/Checkout/ReviewList.module.scss'
import BagItem from '../Bag/BagItem'

function ReviewList() {
  return (
    <div className={styles.reviewList}>
      <div>
        <BagItem />
        <div className={styles.decoreLine} />
      </div>
    </div>
  )
}

export default ReviewList
