import { useDispatch } from 'react-redux'
import { decreaseCount, increaseCount } from '../../store/bag/slice'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import styles from '../../theme/components/Bag/BagItem.module.scss'

function BagItem({ item }) {
  const { id, img, title, color, smallDesc, rating, price, count } = item
  const dispatch = useDispatch()

  const plusClickHandler = () => {
    dispatch(increaseCount(id))
  }
  const minusClickHandler = () => {
    dispatch(decreaseCount(id))
  }

  return (
    <div className={styles.bagItem}>
      <img src={img} alt="" className={styles.itemImg} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <h5>{color}</h5>
        <p>{smallDesc}</p>

        <span className={styles.rating}>{rating}</span>

        <div className={styles.action}>
          <span className={styles.price}>
            $ {price} x {count}
          </span>

          <span className={styles.count}>
            <button onClick={minusClickHandler}>
              <img src={minus} alt="" />
            </button>
            {count}
            <button onClick={plusClickHandler}>
              <img src={plus} alt="" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BagItem
