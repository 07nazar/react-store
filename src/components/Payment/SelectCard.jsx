import styles from '../../theme/components/Payment/SelectCard.module.scss'

const cards = [
  { id: 1, text: 'MasterCard ending in 4242' },
  { id: 2, text: 'VISA Debit ending in 2894' },
]

function SelectCard() {
  return (
    <div className={styles.selectCard}>
      <h3 className={styles.title}>Select a Card</h3>
      <div className={styles.cardItems}>
        {cards.map(({ id, text }) => (
          <p key={id} className={styles.cardItem}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SelectCard
