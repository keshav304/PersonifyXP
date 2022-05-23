import React from 'react'
import styles from '../styles.css'

interface ProductType {
    name: string
    price: string
    image: string
    url?: string
}

const Product = (props:ProductType) => {
  return (
    <div>
    <img className={styles.productImg} src={props.image} />
    <p className={styles.productPrice}>{props.price}</p>
    <p className={styles.productName}>{props.name}</p>
    </div>
  )
}

export default Product