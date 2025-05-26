"use client"

import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useGetProductByIdQuery } from "../store/services/productsApi"
import { addToCart } from "../store/slices/cartSlice"
import styles from "./ProductPage.module.css"

const ProductPage = () => {
  const { id } = useParams<{ id : string }>()
  const productId = id ? Number.parseInt(id) : 0
  const { data : product, error, isLoading } = useGetProductByIdQuery(productId)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product))
    }
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error || !product) {
    return <div className={styles.error}>Error loading product</div>
  }

  // calculate discounted price
  const discountedPrice = product.price * (1 - product.discountPercentage / 100)

  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        {product.images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={image || "/placeholder.svg"}
              alt={`${product.title} - Image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <div className={styles.productInfo}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.brand}>{product.brand}</p>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
          <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.actions}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage


