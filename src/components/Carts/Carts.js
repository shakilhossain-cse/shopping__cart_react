import React from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";

export default function Carts(props) {

  const {carts,cartotal} = props;


  return (
    <div className="carts-container">
      {
        carts.map( cartItem =>  <Cart cartItem={cartItem} key={cartItem.key}/>)
      }
     
      <div className="cart-calculation">
        <div className="calculate-data">
          <h4>Totoal Item </h4>
          <h4>Price </h4>
          <h4>Tax </h4>
          <h4>Shepping Cost </h4>
        </div>
        <div className="calculate-price">
          <h4>: {carts.length}</h4>
          <h4>: ${cartotal}</h4>
          <h4>: ${(cartotal * 0.10).toFixed(2)}</h4>
          <h4>: $20</h4>
        </div>
      </div>
      <div className="cart-calculation total-calculation">
        <div className="calculate-data">
          <h4>Totoal Amount </h4>
        </div>
        <div className="calculate-price">
          <h4>: ${carts.length != 0 ? (cartotal + (cartotal * 0.10) + 20).toFixed(2) : 0}</h4>
        </div>
      </div>

    </div>
  );
}
