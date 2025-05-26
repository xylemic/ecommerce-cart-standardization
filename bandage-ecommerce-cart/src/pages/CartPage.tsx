"use client"

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import type { RootState } from "../store"
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from "../store/slices/cartSlice"
import styles from "./CartPage.module.css"

const CartPage = () => {
  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector((state : RootState) => state.cart)

  const handleRemove = (id : number) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrement = (id : number) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id : number) => {
    dispatch(decrementQuantity(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here.</p>
        <Link to="/" className={styles.continueShoppingBtn}>
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <Link to="/" className={styles.backToShopping}>
          ← Back to Shopping
        </Link>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {items.map((item) => {
            // calculate discounted price
            const discountedPrice = item.price * (1 - item.discountPercentage / 100)

            return (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <div className={styles.itemPriceContainer}>
                    <span className={styles.itemOriginalPrice}>${item.price.toFixed(2)}</span>
                    <span className={styles.itemDiscountedPrice}>${discountedPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.itemQuantity}>
                    <button className={styles.quantityButton} onClick={() => handleDecrement(item.id)}>
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button className={styles.quantityButton} onClick={() => handleIncrement(item.id)}>
                      +
                    </button>
                  </div>
                  <button className={styles.removeButton} onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.cartSummary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Items ({totalQuantity}):</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}>Proceed to Checkout</button>
          <button className={styles.clearCartButton} onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
