import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import CartItem from "../cartItem/cartItem";
import Empty from "../emptyCart/emptyCard";
import './cart.css'
import { useEffect, useState } from "react";
import { apiData } from "../../data/dynamicData";

const Cart = (props)=>{
    const [cartItems, setCart] = useState(1);
    // useEffect(()=>{
    //     setCart(apiData);
    // }, [apiData])
    let itemAmount = cartItems
    console.log(cartItems)
    
    const { totalPrice} = props
    return(
        <form>
            <h2>Your Cart ({itemAmount})</h2>

            {itemAmount === 0 ? (
                    <Empty />
                ) : (
                    <>
                    <div className="cart-list">
                        < CartItem />
                    </div>
                    <div className="total-order">
                        <p>Order Total</p>
                        <span className="total-price">${totalPrice}</span>
                    </div>
                    <p className="alert-info"> <FontAwesomeIcon icon={faAtom}/>  This is a <span>carbon neutral</span> delivery</p>
                    <button className="confirm-order">Confirm Order</button>
                    </>
                )
            }
        </form>
    )
}
export default Cart