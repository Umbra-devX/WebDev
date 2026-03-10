import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styles from './Home.module.css'
import NavBar from '../../components/ui/NavBar/NavBar'
import Hero from '../../components/sections/home/Hero/Hero'
import CtaButton from '../../components/ui/CTAbutton/ctaButton'
import Value from '../../components/sections/home/ValueLine/Value'
import Featured from '../../components/ui/featured/Featured'
import SocialProof from '../../components/sections/home/socialProof/SocialProof'

function Home() {

  return(
    <div className={styles.main}>
      <NavBar theme='light' whiteSpan='light'nav='homeNav'/>
      <Hero />
      <Value />
      <Featured/>
      <SocialProof />
      <CtaButton link="/shop" content='Browse Pieces'/>
    </div>
  )
}

export default Home