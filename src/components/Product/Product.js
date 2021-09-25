import React from 'react'
import './Product.css'

export default function Product(props) {
    const {img,name,price,star} = props.product
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detiles">
                <h3>{name}</h3>
                <p>price : {price}</p>
                <button onClick={()=>props.cartHandeler(props.product)}>Add to cart</button>
            </div>
        </div>
    )

    function List(props){
        return(<li>{props.list}</li>)
       
    }

}
