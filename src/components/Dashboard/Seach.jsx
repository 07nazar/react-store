import styles from '../../theme/components/Dashboard/Search.module.scss'

function Search() {
  return (
    <div className={styles.search}>
      <h5 className={styles.searchTitle}>Search Item</h5>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
    </div>
  )
}

export default Search
