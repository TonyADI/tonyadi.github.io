import React from 'react';
import { Product } from '../Product/Product'
import './ProductList.css'

export const ProductList = props => {
    return(
        <div className="product-list">
        {props.products ? props.products.map(product => {
            return <Product id={product.id} name={product.category_name} 
            imageSrc={product.imageSrc} initialAsk={product.initial_price} 
            buyNow={product.buy_now} duration={product.duration} handleClick={props.handleClick} 
            delete={props.delete}/>
        }) : null}
        </div>
    )
}