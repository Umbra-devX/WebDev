import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({imgUrl, description, name, price, full}) => {
  return (
    <div className={styles.ProductCard}>
        <img src={imgUrl}  alt={description} />
        <div className={styles.details}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
        </div>
    </div>
  )
}

export default ProductCard