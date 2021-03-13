import React from 'react';
import './Category.css';

export const Category = props => {
    const handleClick = () => {
        props.handleClick(props.name)
    }
    return (
        <div className="category-container" onClick={handleClick}>
            <div className="category-background"><img src={props.src} 
            alt={`${props.name} category`}/></div>
            <div><span>{props.name}</span></div>
        </div>
    )
}