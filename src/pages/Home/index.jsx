import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/asyncActions'
import Catalog from '../../components/Dashboard/Catalog'
import Search from '../../components/Dashboard/Seach'

import styles from '../../theme/pages/Home.module.scss'

function Home() {
  const { products } = useSelector(state => state.products)
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts({}))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProducts({ sortBy: 'title', value: searchValue }))
  }, [dispatch, searchValue])

  return (
    <div className={styles.home}>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Catalog products={products} />
    </div>
  )
}

export default Home
