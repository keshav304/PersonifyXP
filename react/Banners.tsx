import React from 'react';
import styles from './styles.css'

const Banners = () => {
  return (
    <div className={styles.bannersContainer}>
        <ul className={styles.categories}>
            <li className={styles.category}>Room</li>
            <li className={styles.category}>Appreal</li>
            <li className={styles.category}>sporting</li>
            <li className={styles.category}>Food and beverages</li>
        </ul>
        <div className={styles.heading}>Product Ideas</div>
        <img className={styles.bannerImg} src='https://i.imgur.com/mK8MbDU.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/iUkqlQf.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/rbKsfCd.jpg' />
    </div>
  )
}

export default Banners