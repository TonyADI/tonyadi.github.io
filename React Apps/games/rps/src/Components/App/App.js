import React, { useEffect, useState } from 'react';
import './App.css';
import Choice from '../Choice/Choice';
import fist from './fist.png'


var items = ['Rock', 'Paper', 'Scissors']
const App = () => {
  const [opposition, setOpposition] = useState('');
  const [player, setPlayer] = useState('');
  const [results, setResults] = useState('');
  const [wins, setWins] = useState(0);
  const [currentWins, setCurrentWins] = useState(0);
  const [color, setColor] = useState('')
  const [tries, setTries] = useState(0);

  const startAnimation = () => {
    let player = document.getElementById('player');
    player.style.animationName = 'player';
    player.style.animationDuration = '2s';
    let opposition = document.getElementById('opposition');
    opposition.style.animationName = 'opposition';
    opposition.style.animationDuration = '2s';
    setTimeout(() => {
    player.style.animationName = '';
    player.style.animationDuration = '';
    opposition.style.animationName = '';
    opposition.style.animationDuration = '';
    }, 2000)
  }

  const handleClick = choice => {
    setTimeout(()=> setPlayer(choice), 1500);
    setTimeout(() => setOpposition(items[Math.floor(Math.random() * 3)]), 1500);
    setTimeout(()=> setTries(tries + 1), 1500);
    startAnimation();
  }

  const setHighScore = () => {
    if(currentWins >= wins){
      setWins(currentWins + 1)
    }
  }

  const result = () => {
    if(player && opposition){
      //alert(player + ' ' + opposition)
      if((player === 'Rock' && opposition === 'Scissors') || (player === 'Paper' && opposition === 'Rock') || 
      (player === 'Scissors' && opposition === 'Paper')){
        setResults('Winner!!');
        setColor('#28a745')
        setCurrentWins(currentWins + 1);
        setHighScore();
      }
      else if(player === opposition){
        setResults('Draw!!')
        setColor('#ffc107')
      }
      else{
        setResults('Loser!!');
        setColor('#dc3545')
      }
    }
  }

  const newGame = () => {
    setResults('');
    setPlayer('');
    setOpposition('');
    setCurrentWins(0);
  }

  useEffect(result, [tries]);

  return (
    <div className="App">
        <h1>Rock, Paper, Scissors!</h1>
        <button className="reset" onClick={newGame}>Reset</button>
        <br />
        <div>Longest Streak: {wins}</div>
        <div>Current Streak: {currentWins} </div>
        <div>Computer:{opposition}</div>
        <div>You: {player}</div>
        <Choice name="Rock" onClick={handleClick}/>
        <Choice name="Paper" onClick={handleClick}/>
        <Choice name="Scissors" onClick={handleClick}/>
        <div>
          <div className="inlineDiv"><img src={fist} id='player' alt=''></img></div>
          <div className="inlineDiv"><img src={fist} id='opposition' alt=''></img></div>
        </div>
        <div><h1 style={{color: color}}>{results}</h1></div>
        <div><h1>Tries: {tries}</h1></div>
    </div>
  );
}

export default App;
