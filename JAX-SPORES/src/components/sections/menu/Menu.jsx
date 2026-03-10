import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp,faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styles from './Menu.module.css'
import { NavLink } from "react-router"

const Menu = ({isOpen, onClose}) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.header}>
            <NavLink to='/'>
            <div className={styles.logo}>
                <span className={styles.jax}>jax</span>
                <span className={styles.spores}>spores</span>
            </div>
            </NavLink>
            <div onClick={onClose}>
                <h2 className={styles.X}>X</h2>
            </div>
        </div>
        <div className={styles.menuFrame}>
            <NavLink className={styles.link} to='/oops'>Our Story</NavLink>
            <NavLink className={styles.link} to='/shop'>Shop</NavLink>
            <NavLink className={styles.link} to='/oops'>About</NavLink>
            <NavLink className={styles.link}to='/oops'>Contact</NavLink>
        </div>
        <div className={styles.social}>
            <span><FontAwesomeIcon icon={faWhatsapp}/></span>
            <span><FontAwesomeIcon icon={faInstagram}/></span>
            <span><FontAwesomeIcon icon={faTiktok}/></span>
        </div>
    </div>
  )
}

export default Menu