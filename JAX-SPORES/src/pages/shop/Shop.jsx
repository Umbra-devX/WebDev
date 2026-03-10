import React from 'react'
import NavBar from '../../components/ui/NavBar/NavBar'
import Featured from '../../components/ui/featured/Featured'
import ProductCard from '../../components/sections/shop/ProductCard/ProductCard'
import { Products } from '../../data/products'
import styles from './Shop.module.css'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
    <NavBar />
    <div className={styles.shop}>
      <div className={styles.name}><span>Shop</span></div>
      <Link></Link>
      <Featured/>
      <section className={styles.grid}>
        {Products.map((product, i) => (
            <div key={product.id} className={(i + 1) % 3 === 0 ? styles.productFull : ''}>
              <Link to={`/shop/${product.id}`}><ProductCard {...product} /></Link>
            </div>
          ))
        }
      </section>
    </div>
    </>
  )
}

export default Shop