import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from '../../theme/pages/Product.module.scss'
import ProductDescription from '../../components/Product/ProductDescription'
import ProductInfo from '../../components/Product/ProductInfo'
import ProductSlider from '../../components/Product/ProductSlider'

function Product() {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const fetchProducts = async () => {
    const response = await fetch(`https://63d735865c4274b136f04454.mockapi.io/products/${id}`)
    const data = await response.json()

    setProduct(data)
    setIsLoading(true)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return isLoading ? (
    <div className={styles.product}>
      <div className={styles.top}>
        <ProductSlider img={product.img} />
        <ProductInfo product={product} />
      </div>
      <ProductDescription description={product.description} />
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default Product
