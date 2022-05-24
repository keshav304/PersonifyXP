import React from 'react';
import styles from './styles.css'
import banner1 from './images/banner1.jpg'
import banner2 from './images/banner2.jpg'
import banner3 from './images/banner3.jpg'

const Banners = () => {
  return (
    <div className={styles.bannersContainer}>
        <img className={styles.productImg} src={banner1} />
        <img className={styles.productImg} src={banner2} />
        <img className={styles.productImg} src={banner3} />
    </div>
  )
}

export default Banners