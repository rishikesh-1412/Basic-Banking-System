import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Customer from './components/Customer';
import Account from './components/Account';
import History from './components/History';
import Contact from './components/Contact';
import Error from './components/Error';

const Router = () => {

  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/customers">
        <Customer />
      </Route>

      <Route exact path="/customers/:id">
        <Account />
      </Route>

      <Route exact path="/history">
        <History />
      </Route>

      <Route exact path="/contact-us">
        <Contact />
      </Route>

      <Route >
        <Error />
      </Route>

    </Switch>
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  )
}

export default App