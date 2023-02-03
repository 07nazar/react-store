import styles from '../../theme/components/Bag/BagItem.module.scss'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import item from '../../assets/item.png'

function BagItem() {
  return (
    <div className={styles.bagItem}>
      <img src={item} alt="" className={styles.itemImg} />
      <div className={styles.info}>
        <h3>Dell XPS 13</h3>
        <h5>White</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </p>
        <span className={styles.rating}>rating</span>
        <div className={styles.action}>
          <span className={styles.price}>$ 1799.99 x 1</span>
          <span className={styles.count}>
            <img src={minus} alt="" />
            1
            <img src={plus} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default BagItem
