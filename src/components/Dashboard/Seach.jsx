import styles from '../../theme/components/Dashboard/Search.module.scss'

function Search(props) {
  const { searchValue, setSearchValue } = props

  const onChangeHandler = text => {
    setSearchValue(text)
  }

  return (
    <div className={styles.search}>
      <h5 className={styles.searchTitle}>Search Item</h5>
      <input
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChange={e => onChangeHandler(e.target.value)}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
    </div>
  )
}

export default Search
