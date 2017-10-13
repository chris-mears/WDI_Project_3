import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/home/HomePage'
import UserPage from './components/user/UserPage'
import CarPage from './components/car/CarPage'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <NavBar />
          <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/:userId' component={UserPage} />
                <Route exact path='/:userId/:carId' component={CarPage} />
          </Switch>
          </div>  
        </Router>    
    )
  }
}

export default App
