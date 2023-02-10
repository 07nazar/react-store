import { useSelector } from 'react-redux'
import BagList from '../../components/Bag/BagList'

import styles from '../../theme/pages/Bag.module.scss'

function Bag() {
  const items = useSelector(state => state.bag.productsInBag)

  return (
    <div className={styles.bag}>
      <BagList items={items} />
    </div>
  )
}

export default Bag
