import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Featured.module.css'
import {faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { Products } from '../../../data/products'
import { useReveal } from '../../../hooks/useReveal'

const Featured = () => {
  const featured = Products.find(p => p.id === '001')

  const ref = useReveal()

  return (
    <Link to={`/shop/${featured.id}`}>
    <div ref={ref} className={`${styles.featured} reveal`}>
        <div className={styles.image}>
          <img src={featured.imgUrl} alt={featured.description} />
        </div>
        <span className={styles.span}><span>THIS MONTH'S PICK </span><FontAwesomeIcon icon={faArrowRight}className={styles.arrow}/></span>
        <div className={styles.details}>
            <p className={styles.name}>{featured.name}</p>
            <p className={styles.detail}>{featured.description}</p>
            <p className={styles.price}>{featured.price}</p>
        </div>
    </div>
    </Link>
  )
}

export default Featured