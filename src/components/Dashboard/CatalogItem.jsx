import styles from '../../theme/components/Dashboard/CatalogItem.module.scss'
import addIcon from '../../assets/icons/addBag.svg'
import close from '../../assets/icons/close.svg'

function CatalogItem({ product, onClickAddToBag, onClickRemoveFromBag }) {
  const { img, title, model, price, selected } = product

  const bagIcon = selected ? close : addIcon

  const buttonClickHandler = () =>
    !selected ? onClickAddToBag(product) : onClickRemoveFromBag(product)

  return (
    <div className={styles.catalogItem}>
      <img src={img} alt="" className={styles.itemImg} />
      <h4>{title}</h4>
      <h5>{model}</h5>
      <div className={styles.action}>
        <span className={styles.price}>$ {price}</span>
        <button className={styles.addBtn} onClick={buttonClickHandler}>
          <img src={bagIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default CatalogItem
