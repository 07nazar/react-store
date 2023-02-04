/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from '../../theme/components/Bag/BagItem.module.scss'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

function BagItem({ item, onChangeQuantity }) {
  const { id, img, title, color, smallDesc, rating, price, count } = item
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(count)

  const onPlusQuantityHandler = () => {
    setQuantity(quantity + 1)
    onChangeQuantity(id, quantity + 1)
  }
  const onMinusQuantityHandler = () => {
    setQuantity(quantity - 1)
    onChangeQuantity(id, quantity - 1)
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
            $ {price} x {quantity}
          </span>

          <span className={styles.count}>
            <button onClick={onMinusQuantityHandler}>
              <img src={minus} alt="" />
            </button>
            {quantity}
            <button onClick={onPlusQuantityHandler}>
              <img src={plus} alt="" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BagItem
