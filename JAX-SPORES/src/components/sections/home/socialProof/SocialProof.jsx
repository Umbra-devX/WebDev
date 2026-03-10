import React from 'react'
import styles from './SocialProof.module.css'
import { useReveal } from '../../../../hooks/useReveal'

const SocialProof = () => {
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  return (
    <div className={`${styles.proofBox} proofBox`}>
        <span>what our customers say</span>
        <div ref={ref1} className={`${styles.proof} reveal`}>
            <p>My space feels completely transformed.</p>
            <span>Amara T.</span>
        </div>
        <div ref={ref2} className={`${styles.proof} reveal`}>
            <p>The quality is unlike anything I've seen locally.</p>
            <span> Chisom O.</span>
        </div>
        <div ref={ref3} className={`${styles.proof} reveal`}>
            <p>Worth every kobo. Genuinely beautiful.</p>
            <span>Josh O.</span>
        </div>
    </div>
  )
}

export default SocialProof