import React from 'react';
import {SliderLayout} from 'vtex.slider-layout';
import styles from './styles.css'


const CartBundleRecs = () => {
  return (
    <div className={styles.productRecsContainer}>
      <h3 className={styles.productRecsHeading}>Customers who bought above products also bought these products.</h3>
      <SliderLayout 
      label='Product Recommendations'
      showNavigationArrows="always"
      itemsPerPage = {4}
      centerMode="center"
      >
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1616321507403-9db926c914fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvd2VyJTIwdG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvd2VyJTIwdG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1625378140199-bcfa871fa8a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG93ZXIlMjB0b29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG93ZXIlMjB0b29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvd2VyJTIwdG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <img className={styles.productImg} src="https://images.unsplash.com/photo-1590635023142-73c3d34f2805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG93ZXIlMjB0b29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </SliderLayout>
    </div>
  )
}

export default CartBundleRecs