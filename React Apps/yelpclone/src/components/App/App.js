import React from 'react';
import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar'
import { Yelp } from '../../utilities/Yelp';
import picture from '../../utilities/pictures/homepicture.jpg';


const business1 = {id:'Toniz-Kidz-Ng', price:'$$', rating: '4.5', review_count: 90, name:'Toniz Kidz', 
location:{city:'Naij'}, imageSrc: picture, categories:[{alias:'1', title:'Japanese'}]}
const businesses = [business1, business1, business1];


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {businesses:businesses}
    this.yelpSearch = this.yelpSearch.bind(this)
  }

  yelpSearch(term, location){
    Yelp.search(term, location).then(businesses => {this.setState({businesses:businesses})});
  }
  render(){
    return (
      <div className="App">
        <div className="home-background">
          <div className="vertical-center">
            <div>
              <h1>Welp!</h1>
            </div>
            <div><SearchBar yelpSearch={this.yelpSearch}/></div>
            <div>
              <span className="span-SR">Restaurants</span>
              <span className="span-SR">Nightlife</span>
              <span className="span-SR">Local Services</span>
              <span className="span-SR">Delivery</span>
              <span className="span-SR">Black Owned</span>
            </div>
          </div>
        </div>
        <div className="midSection">
          <div><h3 className="heading">Welp Toronto</h3></div>
          <div className="locations">
            <span className="span-SR">Richmond Hill</span>
            <span className="span-SR">Vancouver</span>
            <span className="span-SR">Hamilton</span>
            <span className="span-SR">Montreal</span>
            <span className="span-SR">More Cities</span>
          </div>
        </div>
        <div className="mid2Section">
          <div><span class="span-heading">Hot {'&'} New Businesses</span></div>
          <div><BusinessList businesses={this.state.businesses}/></div>
        </div>
      </div>
    );
  }
}

export default App;

/*
citation: https://www.forrec.com/studio/landscape-architecture/projects/food-beverage/pizzeria-libretto/
*/