/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Catalog from '../../components/Dashboard/Catalog'
import Search from '../../components/Dashboard/Seach'
import { fetchProducts } from '../../store/products/asyncActions'
import styles from '../../theme/pages/Home.module.scss'

function Home() {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products])

  return (
    <div className={styles.home}>
      <Search />
      <Catalog products={products} />
    </div>
  )
}

export default Home
