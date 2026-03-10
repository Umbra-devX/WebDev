import React from 'react'
import styles from './NavBar.module.css'
import Menu from '../../sections/menu/Menu'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = ({theme, whiteSpan, nav}) => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false) // closes menu on every route change
  }, [location])

  return (
    <nav className={styles[nav]}>
        <div className={`${styles.hamburger} ${styles[whiteSpan]}`} onClick={()=>{setIsOpen(true)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavLink to='/'>
        <div>
            <span   className={`${styles.jax} ${styles[theme]}`}>jax</span>
            <span className={`${styles.spores} ${styles[theme]}`}>spores</span>
        </div>
        </NavLink>
        <div></div>
        <Menu isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </nav>
  )
}

export default NavBar