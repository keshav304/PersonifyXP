import React from 'react';
import { SliderLayout } from 'vtex.slider-layout';
import styles from './styles.css'
import Product from './components/Product'

const PersonalisedProducts = () => {
  
  return (
    <div className={styles.productRecsContainerHome}>
      <h3 className={styles.productRecsHeading}>Produtct you may like </h3>
      <SliderLayout
        label='Product Recommendations'
        showNavigationArrows="always"
        showPaginationDots="desktopOnly"
        itemsPerPage={{ desktop: 4, tablet: 3, phone: 1 }}
        centerMode="center"
        fullWidth={false}
      >
        <Product
          image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Product 2"
          price="£ 100.00"
        />
        <Product
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          price="£ 100.00"
          name="product 1"
        />
        <Product
          image="https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          price="£ 100.00"
          name="product 1"
        />
        <Product
          image="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          price="£ 100.00"
          name="product 1"
        />
        <Product
          image="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          price="£ 100.00"
          name="product 1"
        />
        <Product
          image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          price="£ 100.00"
          name="product 1"
        />
      </SliderLayout>
    </div>
  )
}

export default PersonalisedProducts