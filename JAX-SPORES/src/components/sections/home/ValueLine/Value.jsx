import React from 'react'
import styles from './Value.module.css'
import { useReveal } from '../../../../hooks/useReveal'

const Value = () => {
  const ref = useReveal()
  return (
    <div ref={ref} className={`${styles.div} reveal`}>
        <p>Every piece, made by hand.</p>
    </div>
  )
}

export default Value