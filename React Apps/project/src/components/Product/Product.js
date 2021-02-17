import React from 'react';
import './Product.css'

export const Product = props => {

    const handleClick = () => {
        props.handleClick(props.id);
    }

    return(
        <div className="product-container">
            <div className="image-container">
                <img className="product-image" src={props.imageSrc} alt=""></img>
            </div>
            <div className="product-details">
                <div><span>{props.name}</span></div>
                <div><span>Current Ask {props.initialAsk}</span></div>
               <div><span>Buy Now {props.buyNow}</span></div>
               <div><span>Duration {props.duration}</span></div>
            </div>
            {props.delete && <button onClick={handleClick}>Delete Me</button>}
        </div>
    );
}