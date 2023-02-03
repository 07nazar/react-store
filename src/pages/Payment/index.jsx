import AddCard from '../../components/Payment/AddCard'
import SelectCard from '../../components/Payment/SelectCard'
import styles from '../../theme/pages/Payment.module.scss'

function Payment() {
  return (
    <div className={styles.payment}>
      <SelectCard />
      <AddCard />
    </div>
  )
}

export default Payment
