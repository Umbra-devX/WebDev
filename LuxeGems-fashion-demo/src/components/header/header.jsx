import { useState } from 'react'
import styles from './Header.module.css'

const Header = ({companyName})=>{

    const [mobile, setMobile] = useState(false);


    return(
        <>
            <header>
                <div className={styles.navBar}>
                    <div>
                        <span>{companyName}</span>
                    </div>
                    <nav className={styles.navContent}>
                        <ul>
                            <li><a href="">Shop</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                    <div className={styles.hamburger} onClick={() => setMobile(!mobile)}>
                            <span className={mobile ? `${styles.bars} ${styles.one}` : `${styles.bars}`}></span>
                            <span className={mobile ? `${styles.bars} ${styles.two}` : `${styles.bars}`}></span>
                            <span className={mobile ? `${styles.bars} ${styles.three}` : `${styles.bars}`}></span>
                    </div>
                </div>
                <div className={mobile ? `${styles.mobileNav} ${styles.open}` : `${styles.mobileNav} ${styles.close}`}>
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                </div>
            </header>
        </>
    )
}
export default Header
