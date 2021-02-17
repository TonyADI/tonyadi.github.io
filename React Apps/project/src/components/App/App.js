import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Authenticate } from '../Authenticate/Authenticate';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Browse } from '../Browse/Browse';
import { Sell } from '../Sell/Sell';
import { Account } from '../Account/Account';
import './App.css';
import picture from '../../utilities/images/xps.jfif';

const App = () => {
  const product = {category_name: 'HP Spectre X360', initial_price: 1840, buy_now: 2500, duration: 20, imageSrc: picture}
  const productList = [product, product, product, product]

  const [account, setAccount] = useState('test@tester.com'); // set to ''
  const [signedIn, setSignedIn] = useState(true);


  
  return (
    <Router>
      <div id="app-body">
        <Navbar signedIn={signedIn}/>
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/sell">
            <Sell account={account}/>
          </Route>
          <Route path="/register">
            <Authenticate title='Register' handleSignedIn={setSignedIn} setAccount={setAccount}/>
          </Route>
          <Route path="/login">
            <Authenticate title='Login' handleSignedIn={setSignedIn} setAccount={setAccount}/>
          </Route>
          <Route path="/account">
            {signedIn && <Account setSignedIn={setSignedIn} setAccount={setAccount} account={account}/> /*temporary solution*/}
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
