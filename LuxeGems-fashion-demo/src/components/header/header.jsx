import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

const Header = ({companyName})=>{
    return(
        <>
            <header className={styles.navBar}>
                <div>
                    <span>{companyName}</span>
                </div>
                <nav className={styles.navContent}>
                    <dialog className={styles.hamburger}>
                        <FontAwesomeIcon icon={faBars}/>
                    </dialog>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header