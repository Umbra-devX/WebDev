import React from 'react'
import styles from './ProductPage.module.css'
import NavBar from '../../components/ui/NavBar/NavBar'
import ProductCard from '../../components/sections/shop/ProductCard/ProductCard'
import { Products } from '../../data/products'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    const product = Products.find(p => p.id === id)
    const tipe = product.type

    const whatsappLink = `https://wa.me/2348109930416?text=Hi JAX Spores, I'm interested in ${product.name} (${product.price})`

  return (
    <div className={styles.div}>
        <NavBar />
        <div className={styles.item}>
            <img src={product.imgUrl} alt={product.description} className={styles.img} />
            <div className={styles.details}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.price}>{product.price}</span>
                <hr className={styles.horizontal} />
                <p className={styles.description}>{product.description}</p>
                <a href={whatsappLink} target='_blank' className={styles.btn}>Order Now</a>
            </div>
        </div>
        <div className={styles.mayAlsoLike}>
            <span className={styles.mayAlsoLikeHeader}>
                You may also like
            </span>
            <div className={styles.mayAlsoLikeDetail}>
                {Products
                    .filter(product => product.type === tipe) // 1. Filter first to get all ceramics
                    .slice(0, 2)                                   // 2. Slice to get only the first two
                    .map((product) => (                            // 3. Map the result to JSX
                    <Link to={`/shop/${product.id}`}><ProductCard key={product.id} {...product} /></Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProductPage