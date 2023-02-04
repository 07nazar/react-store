import { useDispatch } from 'react-redux'
import CatalogItem from './CatalogItem'
import styles from '../../theme/components/Dashboard/Catalog.module.scss'
import { changeSelectedStatus } from '../../store/products/slice'
import { addProductToBag, removeProductFromBag } from '../../store/bag/slice'

function Catalog({ products }) {
  const dispatch = useDispatch()

  const onClickAddToBag = product => {
    dispatch(changeSelectedStatus({ id: product.id, selected: !product.selected }))
    dispatch(addProductToBag({ ...product }))
  }

  const onClickRemoveFromBag = product => {
    dispatch(changeSelectedStatus({ id: product.id, selected: !product.selected }))
    dispatch(removeProductFromBag({ id: product.id }))
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
