import BagItem from './BagItem'
import styles from '../../theme/components/Bag/BagList.module.scss'

function BagList(props) {
  const { items } = props
  console.log(items)

  return (
    <div className={styles.bagList}>
      <h2>Check your Bag Items</h2>
      <div className={styles.list}>
        {items?.map(item => (
          <BagItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default BagList
