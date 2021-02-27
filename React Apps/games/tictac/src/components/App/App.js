import React from 'react';
import './App.css';
import { Board } from '../Board/Board';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {currentMove: 'X', turnList: []}
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(turn, position){
      if(this.state.turnList.every(item => { return item === 'X' || item === 'O'}) && this.state.turnList.length === 8){
        alert('Game Over!')
      }
      const newMove = this.state.currentMove === 'X' ? 'O' : 'X';
      const turns = [...this.state.turnList];
      turns[position] = turn;
      this.setState({turnList: [...turns], currentMove: newMove})
      console.log(this.state.turnList)
    }
    
    render(){
      return (
        <div className="App-body">
          <h1>{this.state.currentMove}'s Turn</h1>
          <Board value={this.state.turnList} onClick={this.handleClick} turn={this.state.currentMove}/>
        </div>
      );
    }
}

export default App;
