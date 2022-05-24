import React from 'react';
import styles from './styles.css'

const Banners = () => {
  return (
    <div className={styles.bannersContainer}>
        <img className={styles.bannerImg} src='https://i.imgur.com/mK8MbDU.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/iUkqlQf.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/rbKsfCd.jpg' />
    </div>
  )
}

export default Banners