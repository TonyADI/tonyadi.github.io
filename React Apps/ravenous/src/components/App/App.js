// Personalized version of Ravenous from codecademy
import React from 'react';
import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Yelp } from '../../util/Yelp';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {businesses:[]}
    this.searchYelp = this.searchYelp.bind(this);
  }
    searchYelp(term, location, sortBy) {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({businesses: businesses})
      });
    }
    render() {
      return (
        <div className="App">
          <h1>Monach <p>By TonyADI</p></h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses} />
    </div>
      );
    }
}