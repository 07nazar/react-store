import styles from '../../theme/components/Product/ProductInfo.module.scss'
import Button from '../../UI/Button'
import addToBag from '../../assets/icons/addBag.svg'

function ProductInfo({ product }) {
  const { title, model, price, rating, smallDesc } = product

  if (!product) {
    return <h1>Loading...</h1>
  }

  console.log(product)
  return (
    <div className={styles.productInfo}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <h4>{model}</h4>
        <span>{rating}</span>
        <b>$ {price}</b>
        <p>{smallDesc}</p>
      </div>
      <div className={styles.button}>
        <Button img={addToBag} text="Add to Bag" />
      </div>
    </div>
  )
}

export default ProductInfo
