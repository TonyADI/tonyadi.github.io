import React, { useState, useEffect } from 'react';
import { CategoryList } from '../CategoryList/CategoryList';
import { ProductList } from '../ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import './Browse.css';

export const Browse = props => {
    const [categories, setCategories] = useState('');
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState('');
    
    const retrieveCategories = () => {
        retrieveData('https://localhost:3000/categories').then(data => {
            console.log(data);
            console.log('Categories retrieved');
            setCategories(data);
        })
    }

    const retrieveProducts = name => {
        const data = {email: props.account};
        setProducts(''); // resets product list because setProducts(data) is not called if no data is received.
        retrieveData(`https://localhost:3000/products/?name=${encodeURI(name)}&acc=${props.account}`, 
        data).then(data => {
            setProducts(data)});
    }


    const handleClick = name => {
        setCategory(name);
        retrieveProducts(name);
    }

    useEffect(() => {
        retrieveCategories();
        retrieveProducts(category);
    }, [])

    return (
        <div>
            <div className="jumbo full-width">
            </div>
            <div>
                <div><h1>Categories</h1></div>
                <div><CategoryList categories={categories} handleClick={handleClick}/></div>
            </div>
            <div>
                <div><h2>{category}</h2></div>
                <div className="browse-products">
                    {products && <ProductList products={products} account={props.account}/>}</div>
            </div>
        </div>
    )
}