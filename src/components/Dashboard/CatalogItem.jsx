import styles from '../../theme/components/Dashboard/CatalogItem.module.scss'
import item from '../../assets/item.png'
import addToBag from '../../assets/icons/addBag.svg'

function CatalogItem() {
  return (
    <div className={styles.catalogItem}>
      <img src={item} alt="" className={styles.itemImg} />

      <h4>Item Name</h4>
      <h5>Small Description</h5>
      <div className={styles.action}>
        <span className={styles.price}>$ 9.99</span>
        <img src={addToBag} alt="" />
      </div>
    </div>
  )
}

export default CatalogItem
