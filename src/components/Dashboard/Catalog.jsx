import { useDispatch } from 'react-redux'
import { changeSelectedStatus } from '../../store/products/slice'
import { addItemToBag, removeFromBag } from '../../store/bag/slice'
import CatalogItem from './CatalogItem'
import styles from '../../theme/components/Dashboard/Catalog.module.scss'

function Catalog({ products }) {
  const dispatch = useDispatch()

  const onClickAddToBag = product => {
    dispatch(changeSelectedStatus({ id: product.id, selected: !product.selected }))
    dispatch(addItemToBag({ ...product, count: 1 }))
  }

  const onClickRemoveFromBag = product => {
    dispatch(changeSelectedStatus({ id: product.id, selected: !product.selected }))
    dispatch(removeFromBag({ id: product.id }))
  }

  return (
    <div className={styles.catalog}>
      {products.map(product => (
        <CatalogItem
          product={product}
          onClickAddToBag={onClickAddToBag}
          onClickRemoveFromBag={onClickRemoveFromBag}
          key={product.id + product.title}
        />
      ))}
    </div>
  )
}

export default Catalog
