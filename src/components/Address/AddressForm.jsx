import styles from '../../theme/components/Address/AddressForm.module.scss'

function AddressForm() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
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
          <button className={styles.Back}>Back</button>

          <p className={styles.connection}>Secure Connection</p>
        </div>
      </form>
    </div>
  )
}

export default AddressForm
