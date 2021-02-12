import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = props => {
    const [term, setTerm] = useState('')

    const handleChange = e => {
        setTerm(e.target.value)
    }

   const handleKeyPress = e => {
    if(e.which === 13){
        alert('clicked')
        console.log('clicked');
    }
   }
    
    return (
        <div id="search-container">
            <i className="fa fa-search search-icon"></i>
            <input id="search-field" value={term} placeholder="Search" 
            onChange={handleChange} onKeyPress={handleKeyPress}/>
        </div>
    )
}