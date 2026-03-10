import styles from './Oops.module.css'
import NavBar from '../NavBar/NavBar'

const Oops = () => {
  return (
    <>
        <NavBar />
        <div className={styles.oops}>
            <img src="/src/assets/images/Oops.png" alt='Oops' />
            <h2>Sorry, we’re still working on this page.</h2>
        </div>
    </>
        
        
  )
}

export default Oops