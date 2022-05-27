import React from 'react';
import HeaderCategories from './HeaderCategories';
import styles from './styles.css'

const Banners = () => {
  return (
    <div className={styles.bannersContainer}>
      <div className={styles.categoriesContainer}>

      </div>
      <HeaderCategories/>
        <div className={styles.bannerContentContainer}>
        <img className={styles.bannerImg} src='https://i.imgur.com/mK8MbDU.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/iUkqlQf.jpg' />
        <img className={styles.bannerImg} src='https://i.imgur.com/rbKsfCd.jpg' />
    </div>
    </div>
  )
}

export default Banners