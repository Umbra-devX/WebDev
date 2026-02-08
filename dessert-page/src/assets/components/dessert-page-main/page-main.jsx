import Header from "../header/header";
import Shelf from "../productShelf/dessertList";
import Cart from "../cart/cart";
import './main.css'

const MainPage = ()=>{
    return(
        <main>
            <Header headerTitle='Menu - Desserts'/>
            <Shelf />
            <Cart />
        </main>
    )
}
export default MainPage