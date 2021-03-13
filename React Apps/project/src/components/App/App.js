import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Account } from '../Account/Account';
import { Authenticate } from '../Authenticate/Authenticate';
import { Browse } from '../Browse/Browse';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import { Sell } from '../Sell/Sell';
import './App.css';

const App = () => {
  const [account, setAccount] = useState('');
  const [userId, setUserId] = useState(0);
  return (
    <Router>
      <div id="app-body">
        <Navbar account={account}/>
        <Switch>
          <Route path="/browse">
            <Browse account={account}/>
          </Route>
          <Route path="/sell">
            <Sell account={account}/>
          </Route>
          {!account && <Route path="/register">
            <Authenticate type='Register' setAccount={setAccount} setUserId={setUserId}/>
          </Route>}
          {!account && <Route path="/login">
            <Authenticate type='Login' setAccount={setAccount} setUserId={setUserId}/>
          </Route>}
          {account && <Route path="/account">
             <Account account={account} setAccount={setAccount} setUserId={setUserId} 
             userId={userId}/>
          </Route>}
          <Route path="/">
            <Home account={account}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
