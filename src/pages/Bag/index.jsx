import { useSelector } from 'react-redux'
import BagList from '../../components/Bag/BagList'

import styles from '../../theme/pages/Bag.module.scss'

function Bag() {
  const { productsInBag } = useSelector(state => state.bag)

  return (
    <div className={styles.bag}>
      <BagList items={productsInBag} />
    </div>
  )
}

export default Bag
