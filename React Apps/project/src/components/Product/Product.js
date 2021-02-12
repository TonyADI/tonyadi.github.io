import React from 'react';
import './Product.css'

export const Product = props => {
    return(
        <div className="product-container">
            <div className="image-container">
                <img className="product-image" src={props.imageSrc} alt=""></img>
            </div>
            <div className="product-details">
                <div><span>{props.name}</span></div>
                <div><span>Current Ask {props.currentAsk}</span></div>
               <div><span>Buy Now {props.buyNow}</span></div>
            </div>
        </div>
    );
}