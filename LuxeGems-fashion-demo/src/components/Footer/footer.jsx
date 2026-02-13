import styles from './Footer.module.css'
import instaLogo from '../../assets/images/instagram.png'
import whatsappLogo from '../../assets/images/whatsapp.png'
const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <span className={styles.footerComments}>2024 LuxeGems. All Rights Reserved</span>
            <span className={styles.socials}>
                <a href=""><img src={instaLogo}/></a>
                <a href=""><img src={whatsappLogo}/></a>
            </span>
        </footer>
    )
}


export default Footer
