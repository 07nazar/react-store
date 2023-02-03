import BagItem from './BagItem'

import styles from '../../theme/components/Bag/BagList.module.scss'

function BagList() {
  return (
    <div className={styles.bagList}>
      <h2>Check your Bag Items</h2>
      <div className={styles.list}>
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
      </div>
    </div>
  )
}

export default BagList
