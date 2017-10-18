import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HomePage from './components/home/HomePage'
import UserPage from './components/user/UserPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
          <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/user/:userName' component={UserPage} />
          </Switch> 
          </div> 
        </Router>  
      </MuiThemeProvider>  
    )
  }
}

export default App
