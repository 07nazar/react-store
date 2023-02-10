import styles from '../../theme/components/Product/ProductSlider.module.scss'

function ProductSlider({ img }) {
  return (
    <div className={styles.productSlider}>
      <div className={styles.gallery}>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <div className={styles.mainImg}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ProductSlider
