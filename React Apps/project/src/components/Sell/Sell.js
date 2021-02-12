import React, {useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Product } from '../Product/Product'
import './Sell.css';

export const Sell = props => {
    const [buyNow, setBuyNow] = useState(null);
    const [initialPrice, setInitialPrice] = useState(null);
    const [duration, setDuration] = useState(null);

    

    return(
        <div id="sell-body">
            <div id="searchbar-heading"><h1>What item are you trying to Sell</h1></div>
            <div id="search-bar">
                <SearchBar />
                <div id='result-container'>
                    <div id='result-flex'>
                        <div>
                            <Product />
                        </div>
                    </div>
                    <div id='form-flex'>
                    <form onSubmit={()=>{}}>
                        <label>
                        <div className="input-container">
                            <span>Initial Ask</span><input className="input-field" type="number" 
                            name="initial-ask" placeholder="Enter Amount" value={null} onChange={null}/>
                        </div>
                        <div className="input-container">
                            <span>Final Ask</span><input className="input-field" type="number" name="final-ask" 
                            placeholder="Enter Amoubt" value={null} onChange={null}/>
                        </div>
                        <div className="input-container">
                            <span>Duration</span><input className="input-field" type="number" name="final-ask" 
                            placeholder="Enter Amount" value={null} onChange={null}/>
                            <span>Hours</span>
                        </div>
                        </label>
                        <input  type="submit" 
                        value="List Product" id="login-button"/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}