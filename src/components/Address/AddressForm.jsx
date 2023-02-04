import { useNavigate } from 'react-router-dom'
import styles from '../../theme/components/Address/AddressForm.module.scss'

function AddressForm() {
  const navigate = useNavigate()

  const goBack = e => {
    e.preventDefault()
    navigate(-1)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.formBox}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>
        <div className={styles.formBox}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>
        <div className={styles.formBox}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>
        <div className={styles.formBox}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>
        <div className={styles.formBox}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>

        <button className={styles.addBtn}>Add Address</button>

        <div className={styles.bottomBox}>
          <button className={styles.Back} onClick={goBack}>
            Back
          </button>

          <p className={styles.connection}>Secure Connection</p>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
