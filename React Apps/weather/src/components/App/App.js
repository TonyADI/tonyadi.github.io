import React from 'react';
import './App.css';
import { getForecast, searchForecast } from '../../util/OpenWeather';
import { SearchBar } from '../SearchBar/SearchBar'

let longitude = '';
let latitude = '';
navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude; 
    latitude = position.coords.latitude;
});
class App extends React.Component{
    constructor(props){
      super(props);
      this.state ={temperature: null, city: '', condition: '', forecasts: [], time: null, 
      imageUrl:'/static/media/clear.e2e3af24.jfif'}
      this.setCondition = this.setCondition.bind(this)
      this.clock = this.clock.bind(this)
      this.setBackground = this.setBackground.bind(this)
      this.handleForecast = this.handleForecast.bind(this)
      this.handleSearch = this.handleSearch.bind(this)
    }

    setCondition(cond){
      this.setState({condition: cond})
    }

    clock(){
      let date = new Date();
      let time = date.toLocaleTimeString();
      this.setState({time: time})
    }

    setBackground(cond){
      if(cond === 'Clouds'){
        this.setState({imageUrl: ''})
      }
    }

    handleForecast (){
      if(longitude && latitude){
        getForecast(longitude, latitude).then(forecast => {
          alert(forecast.forecasts)
          this.setState({forecasts: forecast.forecasts, city: forecast.city, 
          temperature: forecast.forecasts[0].main.temp, condition:
        forecast.forecasts[0].weather[0].main})})
      }
    }

    handleSearch(term){
      searchForecast(term).then(forecast => {this.setState({city: forecast.city,
         condition: forecast.condition, temperature: Math.floor(forecast.temp)})})
    }

    componentDidMount(){
     // setInterval(this.clock, 0);
      //this.handleForecast();
    }

    componentDidUpdate(){
      //this.setBackground(this.state.cond);
    }

    render(){
      return (
        <div className="body" style={{backgroundImage: 
        `url(${this.state.imageUrl})`}}>
          <main>
            <div className="header">
              <span>{this.state.time}</span>
              <SearchBar handleSearch={this.handleSearch}/>
              </div>
            <div><span id="temperature">{`${this.state.temperature}°`}</span></div>
            <div><span id="capitalize">{this.state.city}</span></div>
            <div>{this.state.condition}</div>
          </main>
          <footer>
            Page created by TonyADI
          </footer>
        </div>
      );
  }
}
export default App;
