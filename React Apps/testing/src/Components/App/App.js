import React, { useEffect, useState } from 'react';
import './App.css';
import Item from '../Item/Item';
import fist from './fist.png'


var items = ['Rock', 'Paper', 'Scissors']
const App = () => {
  const [counter, setCounter] = useState('');
  const [opposition, setOpposition] = useState('');
  const [player, setPlayer] = useState('');
  const [results, setResults] = useState('');
  const [wins, setWins] = useState(0);
  const [currentWins, setCurrentWins] = useState(0);

  const startAnimation = () => {
    let player = document.getElementById('player');
    player.style.animationName = 'player';
    player.style.animationDuration = '2.5s';
    let opposition = document.getElementById('opposition');
    opposition.style.animationName = 'opposition';
    opposition.style.animationDuration = '2.5s';
    setTimeout(() => {
    player.style.animationName = '';
    player.style.animationDuration = '';
    opposition.style.animationName = '';
    opposition.style.animationDuration = '';
    }, 3000)
  }

  const handleClick = (turn) => {
    setTimeout(()=> setPlayer(turn), 2000);
    setTimeout(() => setOpposition(items[Math.floor(Math.random() * 3)]), 2000);
    startAnimation();
  }

  const setHighScore = () => {
    if(currentWins >= wins){
      setWins(currentWins + 1)
    }
  }

  const result = () => {
    if(player && opposition){
      if((player === 'Rock' && opposition === 'Scissors') || (player === 'Paper' && opposition === 'Rock') || 
      (player === 'Scissors' && opposition === 'Paper')){
        setResults('Winner!!');
        setCurrentWins(currentWins + 1);
        setHighScore();
      }
      else if(player === opposition){
        setResults('Draw!!')
      }
      else{
        setResults('Loser!!');
      }
    }
  }

  const newGame = () => {
    setResults('');
    setPlayer('');
    setOpposition('');
    setCounter('');
    setCurrentWins(0);
  }

  useEffect(result, [opposition, player]);

  return (
    <div className="App">
        <h1>Rock, Paper, Scissors!</h1>
        <button style={{backgroundColor: 'Green'}}  onClick={newGame}>Reset</button>
        <br />
        <div>High Score: {wins}</div>
        <div>Your Score: {currentWins} </div>
        <div>Counter: {counter}</div>
        <div>Opps:{opposition}</div>
        <div>You: {player}</div>
        <div>Result: {results}</div>
        <Item name="Rock" onClick={handleClick}/>
        <Item name="Paper" onClick={handleClick}/>
        <Item name="Scissors" onClick={handleClick}/>
        <div style={{width: '100%'}}>
          <div className="inlineDiv"><img src={fist} id='player' alt=''></img></div>
          <div className="inlineDiv"><img src={fist} id='opposition' alt=''></img></div>
        </div>
    </div>
  );
}

export default App;
