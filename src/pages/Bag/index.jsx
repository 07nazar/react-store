import BagList from '../../components/Bag/BagList'

import styles from '../../theme/pages/Bag.module.scss'

function Bag() {
  return (
    <div className={styles.bag}>
      <BagList />
    </div>
  )
}

export default Bag
