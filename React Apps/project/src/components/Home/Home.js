import React, { useState, useEffect } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import './Home.css'

export const Home = props => {
    const [featured, setFeatured] = useState('');
    const [latest, setLatest] = useState('');
    const [popular, setPopular] = useState('');
    const [trending, setTrending] = useState('');
    const [recentBids, setRecentBids] = useState('');

    // eventually change email to acc id
    const retrieveFeaturedProduct = () => {
        retrieveData(`https://localhost:3000/products?sortBy=featured&acc=${props.account}`)
        .then(data => {
            setFeatured(data);
        })
    }

    const retrieveLatestCategory = () => {
        retrieveData(`https://localhost:3000/products?sortBy=latest&acc=${props.account}`)
        .then(data => {
            setLatest(data);
        })
    }

    const retrievePopularProduct = () => {
        retrieveData(`https://localhost:3000/products?sortBy=popular&acc=${props.account}`)
        .then(data => {
            setPopular(data);
        })
    }

    const retrieveTrendingProduct = () => {
        retrieveData(`https://localhost:3000/products?sortBy=trending&acc=${props.account}`)
        .then(data => {
            setTrending(data);
        })
    }

    const retrieveRecentBids = () => {
        retrieveData(`https://localhost:3000/products?sortBy=recent&acc=${props.account}`)
        .then(data => {
            setRecentBids(data);
        })
    }

    useEffect(()=> {
        retrieveFeaturedProduct();
        retrievePopularProduct();
        retrieveTrendingProduct();
        retrieveLatestCategory();
        retrieveRecentBids();
        },
    []);

    return(
        <div className="home-container">
            <div className="jumbo full-width">
                <div><h1 className="jumbo-header">Placeholder</h1></div>
            </div>
            <div>
                <div><h1>Featured Product</h1></div>
                <div><ProductList products={featured} account={props.account}/></div>
            </div>
            <div>
                <div><h1>Most Popular</h1></div>
                <div><ProductList products={popular} account={props.account}/></div>
            </div>
            <div>
                <div><h1>Trending</h1></div>
                <div><ProductList products={trending} account={props.account}/></div>
            </div>    
            <div className="aside-container">
                <div className="collection-text">
                    Cannot find the category you are trying to list? Then just add it</div>
                <div><button className="button">Add Category</button></div>
            </div>
            <div>
                <div><h1>Latest Category</h1></div>
                <div><ProductList products={latest} account={props.account}/></div>
            </div>
            <div>
                <div><h1>Recent Bids</h1></div>
                <div><ProductList products={recentBids} account={props.account}/></div>
            </div>
        </div>
    )
}