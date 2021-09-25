import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';
import Carts from '../Carts/Carts';
import './Content.css';

export default function Content() {

    const [products, setProducts] = useState([]);
    const [carts , setCarts] = useState([]);
    const [cartotal , setCartotal] = useState(0)
    const cartHandeler = product => {
        const newCart = [...carts,product]
        let amount = 0;
        for (const cart of newCart) {
            amount =cart.price + amount
        }
        setCartotal(amount)
        // newCart.reduce((prev , recent)=> prev + recent,0)
        setCarts(newCart)
    }
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <main>
            <Products products={products} cartHandeler={cartHandeler}/>
           <Carts carts={carts} cartotal={cartotal}/>
        </main>
    )
}
