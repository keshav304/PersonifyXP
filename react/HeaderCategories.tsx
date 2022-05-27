import React from 'react'
import styles from './styles.css'

const HeaderCategories = () => {
  return (
    <ul className={styles.categoryContainer}>
    <li className={styles.bannerCategory}>Room</li>
    <li className={styles.bannerCategory}>Appreal</li>
    <li className={styles.bannerCategory}>sporting</li>
    <li className={styles.bannerCategory}>Food and beverages</li>
</ul>
  )
}

export default HeaderCategories