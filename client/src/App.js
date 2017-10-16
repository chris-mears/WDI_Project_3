import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

import HomePage from './components/home/HomePage'
import UserPage from './components/user/UserPage'
import CarPage from './components/car/CarPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router>
          <div>
          <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/user/:userName' component={UserPage} />
                <Route exact path='/:userName/:carName' component={CarPage} />
          </Switch> 
          </div> 
        </Router>  
      </MuiThemeProvider>  
    )
  }
}

export default App
