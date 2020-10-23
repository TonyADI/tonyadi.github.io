import React from 'react';
import './App.css';
import { Board } from '../Board/Board';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {currentMove: 'X'}
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      const newMove = this.state.currentMove === 'X' ? 'O' : 'X';
      this.setState({currentMove: newMove})
    }
    
    render(){
      return (
        <div className="App">
          <span>{this.state.currentMove}'s turn</span>
          <Board value={this.state.currentMove} onClick={this.handleClick}/>
        </div>
      );
    }
}

export default App;
