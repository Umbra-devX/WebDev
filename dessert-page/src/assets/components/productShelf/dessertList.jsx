import DessertCard from "../dessertCard/dessertCard"
import './dessertList.css'
import { productList } from '../../data/dessertProducts'


const Shelf = ()=>{
    return(
        <section className='section'>
            <h2>Desserts</h2>
            <section className="shelf">
                { productList.map((product)=>(
                    <DessertCard productImage={product.productImg} productType={product.productType} productName={product.productName} productPrice={product.productPrice}
                    productProps={product}
                    />
                ))}
            </section>
        </section>
    )
}

export default Shelf

// { productList.map((food)=>{
//     <DessertCard productName={food.productName}/>
// })}