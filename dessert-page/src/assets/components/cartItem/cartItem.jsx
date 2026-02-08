import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './cartItem.css'

const CartItem = (props)=>{
    const {productName='red', productPrice='1', itemSubtotalPrice='22', productQty='2'} = props
    return (
    <div className="cart-item">
        <div className="item-detail">
            <h3 className="product-name">{productName}</h3>
            <div className="product-detail">
                <span className="product-qty">{productQty}x</span>
                <span className="product-price">@ ${productPrice}</span>
                <span className="item-subtotal-price">${itemSubtotalPrice}</span>
            </div>
        </div>
        <div className="clear-item-btn-container">
            <div className="clear-item-btn">
                < FontAwesomeIcon icon={faCircleXmark} className="i"/>
            </div>
        </div>
    </div>
    )
}

export default CartItem;