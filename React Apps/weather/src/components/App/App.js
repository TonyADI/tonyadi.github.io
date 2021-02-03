import React from 'react';
import './App.css';
import { Forecast } from '../Forecast/Forecast';
import Logo from '../Logo/Logo'

class App extends React.Component{
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <Logo />
          <h1>Weather</h1>
          </header>
          <main>
            <Forecast />
          </main>
          <footer>
            Page created by TonyADI
          </footer>
        </div>
      );
  }
}
export default App;
