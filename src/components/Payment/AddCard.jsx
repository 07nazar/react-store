import styles from '../../theme/components/Payment/AddCard.module.scss'

function AddCard() {
  return (
    <form className={styles.addNewCard}>
      <h3 className={styles.title}>Add a new Card</h3>

      <form className={styles.form}>
        <div className={styles.name}>
          <p className={styles.inputTitle}>Cardholder Name</p>
          <input type="text" placeholder="John Maker" />
        </div>
        <div className={styles.cardNumber}>
          <p className={styles.inputTitle}>Card Number</p>
          <input type="text" placeholder="5126-5987-2214-7621" />
        </div>
        <div className={styles.cardData}>
          <div className={styles.cardDate}>
            <p className={styles.inputTitle}>Expiry Date</p>
            <input type="text" placeholder="MM / YYYY" />
          </div>
          <div className={styles.cardCVC}>
            <p className={styles.inputTitle}>CVC</p>
            <input type="text" placeholder="123" />
          </div>
        </div>

        <label className={styles.save} htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <p>Save this as your default payment method</p>
        </label>

        <button className={styles.addBtn}>Add Payment Method</button>

        <div className={styles.bottomBox}>
          <button className={styles.Back}>Back</button>

          <p className={styles.connection}>Secure Connection</p>
        </div>
      </form>
    </form>
  )
}

export default AddCard
