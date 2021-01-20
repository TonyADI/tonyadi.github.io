import React from 'react';
import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar'
import { Yelp } from '../../utilities/Yelp';
import picture from '../../utilities/pictures/homepicture.jpg';

/*
const business1 = {id:'Toniz-Kidz-Ng', price:'$$', rating: '2.5', reviewCount: 0, name:'Toniz Kidz', 
city:'Naij', imageSrc: picture, category:[{title:'Japanese'}, {title:'Yamcha'}]}
const businessList = [business1, business1, business1];
*/
var longitude = '';
var latitude = '';
navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude; 
    latitude = position.coords.latitude;
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {businesses:[], termsList:[], hotBusinesses:[]}
    this.yelpSearch = this.yelpSearch.bind(this)
    this.yelpAutocomplete = this.yelpAutocomplete.bind(this)
  }

  yelpSearch(term, location){
    Yelp.search(term, location).then(businesses => {this.setState({businesses:businesses})});
  }

  yelpAutocomplete(term){
    Yelp.autocomplete(term).then(terms => {this.setState({termsList: terms})});
  }

  componentDidMount(){
    Yelp.sortBy(longitude, latitude, 3, 'rating').then(businesses => {this.setState({hotBusinesses: businesses})});
  }

  render(){
    return (
      <div className="App">
        <div className="home-background">
          <div className="vertical-center">
            <div>
              <h1>Welp!</h1>
            </div>
            <div><SearchBar yelpSearch={this.yelpSearch} yelpAutocomplete={this.yelpAutocomplete} 
            termsList={this.state.termsList} latitude={latitude} longitude={longitude}/></div>
            <div>
              <span className="service-type">Restaurants</span>
              <span className="service-type">Nightlife</span>
              <span className="service-type">Local Services</span>
              <span className="service-type">Delivery</span>
              <span className="service-type">Black Owned</span>
            </div>
          </div>
        </div>
        <div className="midSection">
          <div><h3 className="heading">Welp Toronto</h3></div>
          <div className="locations">
            <a href='https://www.yelp.ca/richmond-hill' className="location"><span className="span-loc">Richmond Hill</span></a>
            <a href='https://www.yelp.ca/vancouver' className="location"><span className="span-loc">Vancouver</span></a>
            <a href='https://www.yelp.ca/calgary' className="location"><span className="span-loc">Calgary</span></a>
            <a href='https://www.yelp.ca/edmonton' className="location"><span className="span-loc">Edmonton</span></a>
            <a href='https://www.yelp.ca/halifax' className="location"><span className="span-loc">Halifax</span></a>
            <a href='https://www.yelp.ca/montreal' className="location"><span className="span-loc">Montreal</span></a>
            <a href='https://www.yelp.ca/locations' className="location"><span className="span-loc">More Cities</span></a>
          </div>
        </div>
        <div className="mid2Section">
          <div><span className="span-heading">Hot {'&'} New Businesses</span></div>
          <div>
            <BusinessList businesses={this.state.hotBusinesses}/>
          </div>
          <div>
            <h4 className="heading">Search Results</h4>
            <BusinessList businesses={this.state.businesses}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

/*
citation: https://www.forrec.com/studio/landscape-architecture/projects/food-beverage/pizzeria-libretto/
*/