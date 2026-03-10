import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroTxt}>
            <span className={styles.headline}><p>Aesthetic Pieces, Made to Last</p></span>
            <span className={styles.subHeadline}><p>Silicone molds & curated decor, handcrafted for your space.</p></span>
        </div>
    </div>
  )
}

export default Hero