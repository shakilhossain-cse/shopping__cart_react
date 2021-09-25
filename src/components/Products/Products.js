import React from 'react'
import Product from '../Product/Product';
import './Products.css';

export default function Products(props) {


    return (
        <div className="products">
            
            {props.products.map(product => <Product product={product} cartHandeler={props.cartHandeler} key={product.key}/>)}
        </div>
    )
}
