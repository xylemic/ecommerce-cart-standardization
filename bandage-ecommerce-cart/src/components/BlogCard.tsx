import type React from "react"
import { Link } from "react-router-dom"
import styles from "./BlogCard.module.css"

interface BlogCardProps {
  image: string
  title: string
  description: string
  date: string
  comments: number
  isNew?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, date, comments, isNew = false }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img src={image || "/placeholder.svg"} alt={title} className={styles.image} />
        {isNew && <span className={styles.newBadge}>NEW</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={styles.tag}>Google</span>
          <span className={styles.tag}>Trending</span>
          <span className={styles.tag}>New</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <div className={styles.date}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="#23A6F0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 4.5V8H11.5" stroke="#23A6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{date}</span>
          </div>
          <div className={styles.comments}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
                stroke="#23856D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{comments} comments</span>
          </div>
        </div>
        <Link to="/" className={styles.learnMore}>
          Learn More
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrow}
          >
            <path d="M1 1L8 8L1 15" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard


