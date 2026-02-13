import Header from "../header/header";
import HeroSection from "../heroSection/hero-section";
import './main.css'

const Main =()=>{
    return(
    <div className="main">
        <Header companyName='LuxeGems'/>
        <HeroSection />
    </div>
    )
}
export default Main