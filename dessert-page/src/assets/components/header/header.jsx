import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Header = (props)=>{
    const {headerTitle} = props
    return(
        <header>
            <nav className="main-page-nav">
                <button><FontAwesomeIcon icon= {faArrowLeft} />Menu</button>
            </nav>
            <h1 className="header-title">{ headerTitle }</h1>
        </header>
    )
}
export default Header