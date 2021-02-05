import React from 'react';
import './App.css';
import { Forecast } from '../Forecast/Forecast';
//import { LocationIQ } from '../../util/LocationIQ';
import { getForecast } from '../../util/OpenWeather';
//import Logo from '../Logo/Logo'

let longitude = '';
let latitude = '';
navigator.geolocation.getCurrentPosition((position) => {
    longitude = position.coords.longitude; 
    latitude = position.coords.latitude;
});
class App extends React.Component{
    constructor(props){
      super(props);
      this.state ={city: '', condition: '', forecasts: [], time: null, 
      imageUrl:'/static/media/clear.e2e3af24.jfif'}
      this.setCondition = this.setCondition.bind(this)
      this.clock = this.clock.bind(this)
      this.setBackground = this.setBackground.bind(this)
      this.handleForecast = this.handleForecast.bind(this)
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
          this.setState({forecasts: forecast.forecasts, city: forecast.city})})
      }
    }

    componentDidMount(){
      //setInterval(this.clock, 1000);
      this.handleForecast();
    }

    componentDidUpdate(){
      //this.setBackground(this.state.cond);
    }

    render(){
      return (
        <div className="body" style={{backgroundImage: 
        `url(${this.state.imageUrl})`}}>
          <main>
            <div>{this.state.time}</div>
            <div><span>{this.state.city}</span></div>
            <div>{this.state.forecasts[0] ? 
            this.state.forecasts[0].weather[0].main : null}</div>
            <div><span>{this.state.forecasts[0] ? 
            Math.floor(this.state.forecasts[0].main.temp) + '°' : null}</span></div>
          </main>
          <footer>
            Page created by TonyADI
          </footer>
        </div>
      );
  }
}
export default App;
