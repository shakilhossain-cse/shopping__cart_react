import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png'
export default function Header() {
    return (
        <div>
            <div className="img-container">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <div className="cat-item">
                    <a href="">Home</a>
                    <a href="">Product</a>
                    <a href="">About</a>
                    <a href="">Cart</a>
                </div>
                <div className="cart-search">
                    <input type="text" name="" id="" />
                </div>
            </nav>
        </div>
    )
}
