import React from 'react';
import { Link } from "react-router-dom";
import { SearchBar } from '../SearchBar/SearchBar'
import './Navbar.css'

export const Navbar = props => {
    return(
        <div>
            <nav>
            <ul>
                <div id="nav-container">
                <li id="home">
                    <Link to="/">Home</Link>
                </li>
                {!props.signedIn && 
                <li>
                    <Link to="/login">Login</Link>
                </li>
                }
                {!props.signedIn && 
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                }

                {props.signedIn &&
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                }
                    
                <li id="sell">
                        <Link to="/sell">Sell</Link>
                </li>
                
                <li id="browse">
                    <Link to="/browse">Browse</Link>
                </li>
                <li>
                    <SearchBar />
                </li>
                </div>
            </ul>
            </nav>
        </div>
    )
}