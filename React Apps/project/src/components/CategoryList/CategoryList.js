import React from 'react';
import { Category } from '../Category/Category';


export const CategoryList = props => {
    return (
        <div className="inline-display">
            {props.categories ? props.categories.map(category => 
            <Category handleClick={props.handleClick} name={category.name} 
            src={category.image_src}/>) : <div>No categories to display</div>}
        </div>
    );
}