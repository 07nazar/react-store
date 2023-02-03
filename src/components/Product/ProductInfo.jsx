import styles from '../../theme/components/Product/ProductInfo.module.scss'
import Button from '../../UI/Button'
import addToBag from '../../assets/icons/addBag.svg'

function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <div className={styles.info}>
        <h2>Apple Watch</h2>
        <h4>Series 5 SE</h4>
        <span>rating</span>
        <b>$ 529.99</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus
          imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec
          lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.
        </p>
      </div>
      <div className={styles.button}>
        <Button img={addToBag} text="Add to Bag" />
      </div>
    </div>
  )
}

export default ProductInfo
