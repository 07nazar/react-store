import { useDispatch } from 'react-redux'
import BagItem from './BagItem'
import styles from '../../theme/components/Bag/BagList.module.scss'
import { setProductCount } from '../../store/bag/slice'
import { changeSelectedStatus } from '../../store/products/slice'

function BagList({ items }) {
  const dispatch = useDispatch()

  const onChangeQuantity = (id, quantity) => {
    if (quantity <= 0) dispatch(changeSelectedStatus({ id, selected: false }))

    dispatch(setProductCount({ id, count: quantity }))
  }

  return (
    <div className={styles.bagList}>
      <h2>Check your Bag Items</h2>
      <div className={styles.list}>
        {items?.map(item => (
          <BagItem
            item={item}
            key={`${item.id}_${item.price}`}
            onChangeQuantity={onChangeQuantity}
          />
        ))}
      </div>
    </div>
  )
}

export default BagList
