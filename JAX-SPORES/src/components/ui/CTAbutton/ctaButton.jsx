import styles from './ctaButton.module.css'
import { NavLink } from 'react-router'

const CtaButton = ({state, link, content}) => {
  return (
    <NavLink to={link}>
      <button className={styles[state]}>
        {content}
      </button>
    </NavLink>
  )
}

export default CtaButton