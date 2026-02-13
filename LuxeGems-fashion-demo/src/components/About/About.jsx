import styles from './About.module.css'

const About = ()=>{
    return(
        <div className={styles.About}>
            <div className={styles.aboutHeader}>
                <span>About Us</span>
            </div>
            <div className={styles.aboutContents}>
                <p>We create timeless jewelry pieces that bring elegance and confidence to your everyday look.</p>
            </div>
            <div className={styles.coloredDiv}></div>
        </div>
    )
}

export default About