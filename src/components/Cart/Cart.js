import React from 'react'
import './Cart.css';

export default function Cart(props) {
    const {img,name,price} = props.cartItem;
    return (
        <div className="cart">
            <div className="cart-img">
                <img src={img} alt="" />
            </div>
            <div className="cart-detiles">
                <h5>{name}</h5>
                <p>Price : ${price}</p>
            <button>Delete</button>
            </div>
        </div>
    )
}
