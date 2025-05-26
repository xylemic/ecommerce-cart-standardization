import { useGetProductsQuery } from "../store/services/productsApi"
import ProductCard from "../components/ProductCard"
import styles from "./ProductsPage.module.css"

const ProductsPage = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>Error loading products</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productsGrid}>
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage


