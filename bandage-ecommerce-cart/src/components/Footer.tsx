import type React from "react"
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <Link to="/" className={styles.logo}>
            Bandage
          </Link>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.linksSection}>
            <h3 className={styles.linksSectionTitle}>Features</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.link}>
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  User Analytic
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.linksSectionTitle}>Resources</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.link}>
                  iOS & Android
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.linksSectionTitle}>Company Info</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribeSection}>
          <h3 className={styles.subscribeTitle}>Get In Touch</h3>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Your Email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.subscribeNote}>Lore imp sum dolor Amit</p>
        </div>

        <div className={styles.copyright}>
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
