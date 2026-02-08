import './dessertCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const DessertCard = (productProps)=>{
    const {productImage, productType='balaclava', productName, productPrice='4.50'} = productProps

// const [isActive, setIsActive] = useState(false);
// const handleIsActive = () => {
//   setIsActive(true);
// };
// const [qty, setQty] = useState(1);
// const increaseQty =()=>{
//     setQty(prev => prev + 1)
// }
// const decreaseQty = ()=>{
//     setQty(prev => (prev > 1 ? prev - 1 : 1))
// }
const addToCart = (item)=>{
    console.log(item)
}

    return(
        <>
            <div className="product-card">
                <div className="product-container">
                    <img src= {productImage} alt="product_image" />
                  <div className='add-to-cart-ctrl'>
                        <button onClick={addToCart(productProps)} className="add-to-cart add" >
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span>Add to Cart</span>
                        </button>
                        <div className='add-to-cart qty'>
                            <button><FontAwesomeIcon icon={faCirclePlus} /></button>
                            <span>1</span>
                            <button><FontAwesomeIcon icon={faMinusCircle} /></button>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <p className="product-type">{productType}</p>
                    <h3 className="product-name">{productName}</h3>
                    <p className='product-price'>${productPrice}</p>
                </div> 
            </div>
            {/* <script src='./dessertCard.js'></script> */}
        </>
    )
}
export default DessertCard