import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './Home.css'



export const Home = props => {
    return(
        <div>
            <div className="jumbo">
                <div><h1 className="jumbo-header">Welcome</h1></div>
            </div>
            <div>Trending</div>
            <div><ProductList products={props.productList}/></div>
        </div>
    )
}