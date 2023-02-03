import styles from '../../theme/components/Checkout/ReviewBag.module.scss'
import ReviewList from './ReviewList'

function ReviewBag() {
  return (
    <div className={styles.reviewBag}>
      <h3>Review you Bag</h3>
      <ReviewList />
    </div>
  )
}

export default ReviewBag
