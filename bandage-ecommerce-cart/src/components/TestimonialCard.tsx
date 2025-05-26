import styles from "./TestimonialCard.module.css"

interface TestimonialCardProps {
  avatar : string
  rating : number
  text : string
  name : string
  position : string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, rating, text, name, position }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.avatarContainer}>
        <img src={avatar || "/placeholder.svg"} alt={name} className={styles.avatar} />
      </div>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={star <= rating ? "#FFCE31" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            className={styles.star}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#FFCE31"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
      <p className={styles.text}>{text}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
    </div>
  )
}

export default TestimonialCard
