import type React from "react"
import { Link } from "react-router-dom"
import type { Product } from "../store/services/productsApi"
import styles from "./ProductCard.module.css"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // calculate discounted price
  const discountedPrice = product.price * (1 - product.discountPercentage / 100)

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.imageContainer}>
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} className={styles.image} />
      </Link>
      <div className={styles.content}>
        <Link to={`/product/${product.id}`}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>
        <p className={styles.brand}>{product.brand}</p>
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
          <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
