import styles from '../../theme/components/Product/ProductSlider.module.scss'
import logo from '../../assets/item.png'

function ProductSlider() {
  return (
    <div className={styles.productSlider}>
      <div className={styles.gallery}>
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className={styles.mainImg}>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default ProductSlider
