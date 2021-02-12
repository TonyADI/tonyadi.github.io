import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Browse } from '../Browse/Browse';
import { Sell } from '../Sell/Sell';
import { Account } from '../Account/Account'
import './App.css';
import picture from '../../utilities/images/xps.jfif';

const App = () => {
  const product = {name: 'HP Spectre X360', currentAsk: 1840, buyNow: 2500, imageSrc: picture}
  const productList = [product, product, product, product]

  const [account, setAccount] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  
  return (
    <Router>
      <div id="app-body">
        <Navbar signedIn={signedIn}/>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/register">
            <Register handleSignedIn={setSignedIn} setAccount={setAccount}/>
          </Route>
          <Route path="/login">
            <Login handleSignedIn={setSignedIn} setAccount={setAccount}/>
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Home productList={productList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
