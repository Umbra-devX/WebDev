import styles from './Footer.module.css'

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <span className={styles.footerComments}>2024 LuxeGems. All Rights Reserved</span>
            <span className={styles.socials}>
                <a href=""><img src="/src/assets/images/instagram.png"/></a>
                <a href=""><img src="/src/assets/images/whatsapp.png"/></a>
            </span>
        </footer>
    )
}

export default Footer