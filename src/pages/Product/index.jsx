import styles from '../../theme/pages/Product.module.scss'
import ProductDescription from '../../components/Product/ProductDescription'
import ProductInfo from '../../components/Product/ProductInfo'
import ProductSlider from '../../components/Product/ProductSlider'

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.top}>
        <ProductSlider />
        <ProductInfo />
      </div>

      <ProductDescription />
    </div>
  )
}

export default Product
