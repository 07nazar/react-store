import styles from '../theme/UI/Button.module.scss'

function Button({ img, text }) {
  return (
    <button className={styles.button}>
      {img && <img src={img} alt="" />}
      <span>{text}</span>
    </button>
  )
}

export default Button
