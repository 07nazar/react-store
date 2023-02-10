import styles from '../../theme/components/Product/ProductDescription.module.scss'

function ProductDescription({ description }) {
  return (
    <div className={styles.description}>
      <h4>Description</h4>
      <p>{description}</p>
    </div>
  )
}

export default ProductDescription
