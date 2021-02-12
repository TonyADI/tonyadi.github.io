import React from 'react';
import { Product } from '../Product/Product'
import './ProductList.css'

export const ProductList = props => {
    return(
        <div className="product-list">
        {props.productList ? props.productList.map(product => {
            return <Product name={product.name} 
            imageSrc={product.imageSrc} currentAsk={product.currentAsk} 
            buyNow={product.buyNow} />
        }) : null}
        </div>
    )
}