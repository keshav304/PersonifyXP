import React from 'react';
import styles from './styles.css'

const Banners = () => {
  return (
    <div className={styles.bannersContainer}>
        <ul className={styles.categoryContainer}>
            <li className={styles.bannerCategory}>Room</li>
            <li className={styles.bannerCategory}>Appreal</li>
            <li className={styles.bannerCategory}>sporting</li>
            <li className={styles.bannerCategory}>Food and beverages</li>
        </ul>
        <div className={styles.homeBannerHeading}>Product Ideas</div>
        <img className={styles.bannerImg} src='https://i.imgur.com/mK8MbDU.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/iUkqlQf.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/rbKsfCd.jpg' />
    </div>
  )
}

export default Banners