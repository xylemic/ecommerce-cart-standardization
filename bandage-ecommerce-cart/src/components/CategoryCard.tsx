import type React from "react"
import styles from "./CategoryCard.module.css"

interface CategoryCardProps {
  name : string
  image : string
  itemCount : number
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, itemCount }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imageContainer}>
        <img src={image || "/placeholder.svg?height=200&width=400"} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.itemCount}>{itemCount} Items</span>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.readMore}>Read More</span>
      </div>
    </div>
  )
}

export default CategoryCard
