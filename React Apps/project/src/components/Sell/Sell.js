import React, { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Product } from '../Product/Product';
import { ProductList } from '../ProductList/ProductList';
import { createProduct, retrieveData } from '../../utilities/projectAPI';
import './Sell.css';

export const Sell = props => {
    const [buyNow, setBuyNow] = useState('');
    const [initialAsk, setInitialAsk] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])
    const [display, setDisplay] = useState('none');

    const handleCategories = () => {
        retrieveData(window.location.href, 'categories').then(data => {
            setCategories(data)});
    }

    const handleProducts = () => {
        const path = encodeURI('categories/iPhone 11');
        retrieveData(window.location.href, path).then(data => {
            setProducts(data)
        })
    }

    const handleChange = e => {
        switch(e.target.name){
            case 'initial-ask':
                setInitialAsk(e.target.value);
                break;
            case 'buy-now':
                setBuyNow(e.target.value);
                break;
            case 'duration':
                setDuration(e.target.value);
                break;
            default:
                console.log('didnt work bro')
        }
    }


    const handleSubmit = e => {
        const data = {category: 'iPhone 11', account: props.account, buyNow: buyNow, initialAsk: initialAsk, 
            duration: duration};
        createProduct(window.location.href, data).then(value => {
            if(value){
                console.log('Product was created.')
            }
        })
        e.preventDefault();
    }

    window.onclick = e => {
        const productModal = document.getElementById('result-container');
        if(e.target === productModal){
            setDisplay('none');
        }
    }

    return(
        <div id="sell-body">
            <div id="searchbar-heading"><h1>What item are you trying to Sell</h1></div>
            <div id="search-bar">
                <SearchBar />
                {categories ? categories.map(category => {return <div>{category.name}</div>}) : null}
                <button onClick={handleCategories}>Display Categories</button>
                <div onClick={() => {
                    setDisplay('flex')}}>List an iPhone 11</div>
                <div onClick={handleProducts}>Display iPhone 11's</div>
                    <ProductList products={products}/>


                    {//make result container a component?
                    }
                <div id='result-container' style={{display: display}}>
                    <div id='result-flex'>
                        <div>
                            <Product />
                        </div>
                    </div>
                    <div id='form-flex'>
                    <form onSubmit={handleSubmit}>
                        <label>
                        <div className="input-container">
                            <span>Initial Ask</span><input className="input-field" type="number" 
                            name="initial-ask" placeholder="Enter Amount" value={initialAsk} onChange={handleChange}/>
                        </div>
                        <div className="input-container">
                            <span>Final Ask</span><input className="input-field" type="number" name="buy-now" 
                            placeholder="Enter Amount" value={buyNow} onChange={handleChange}/>
                        </div>
                        <div className="input-container">
                            <span>Duration</span><input className="input-field" type="number" name="duration" 
                            placeholder="Enter Amount" value={duration} onChange={handleChange}/>
                            <span>Hours</span>
                        </div>
                        </label>
                        <input  type="submit" 
                        value="List Product" id="authenticate-button"/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}