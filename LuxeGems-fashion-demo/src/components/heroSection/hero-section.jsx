import heroImage from '../assets/images/heroImage.png'
import styles from './HeroSection.module.css'
import Collection from '../collection/Collection'

const HeroSection = ()=>{
    return(
        <>
            <main className={styles.hero}>
                <div className={`${styles.columnLayout} ${styles.heroPrimary}`}>
                    <h1 className={styles.heroTxt}>Timeless Pieces for Bold Women</h1>
                    <p className={styles.heroComment}>Discover handcrafted jewelry designed to elevate your everyday style.</p>
                    <a href="#Collection">View Collection</a>
                </div>
                <div className={`${styles.columnLayout} ${styles.imgContainer}`}>
                    <img src={heroImage} alt="hero_image" className={styles.heroImage}/>
                </div>
            </main>
        </>
    )
}

export default HeroSection
