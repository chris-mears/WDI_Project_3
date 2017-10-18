import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import LoginModal from './LoginModal'
import LogoIcon from '../LogoIcon'
import { Parallax } from 'react-parallax';
import HeroContainer from './HeroContainer'
import MainDiv from './MainDiv'


class HomePage extends Component {
    state = {
        users: [],
        user: {},
        loggedUser: {
            userName: '',
            password: ''
        },
        signUp: {
            userName: '',
            password: '',
            name: ''
        },
        redirectToUser: false
    }

    // Call the getAllUsers method as soon as the component is created
    componentWillMount() {
        this.getAllUsers()
    }

    // Use axios to get all users async/await is being used here instead of promises
    getAllUsers = async() => {
        try {
            const res = await axios.get('/api/users')
            this.setState({users: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    handleLogInChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.loggedUser}
    updateUser[attribute] = event.target.value
    this.setState({loggedUser: updateUser})
  }

  handleSignUpChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.signUp}
    updateUser[attribute] = event.target.value
    this.setState({signUp: updateUser})
  }

  handleLogIn = async (event) => {
    event.preventDefault()
    try {
        const res = await axios.post('/api/users/signin', {
      'user': this.state.loggedUser
    })
    this.setState({user: res.data})
    if (this.state.user !== null) {
        this.setState({redirectToUser: true})
    }
    } catch (err) {
        console.log(err)
    }
  }

  handleSignUpSubmit = async (event) => {
    event.preventDefault()
    try {
    const res = await axios.post('/api/users/', {
      'user': this.state.signUp
    })
    this.setState({user: res.data})
    console.log()
    if (this.state.user !== null) {
        this.setState({redirectToUser: true})
    }
    } catch (err) {
        console.log(err)
    }
  }

    render() {
        if (this.state.redirectToUser) {
            return <Redirect to={`/user/${this.state.user.userName}`}/>
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                <AppBar
                title="CarLog"
                iconElementLeft={<LogoIcon />}
                iconElementRight={<LoginModal 
                loggedUser={this.state.loggedUser}
                signUp={this.state.signUp}
                handleLogInChange={this.handleLogInChange}
                handleSignUpChange={this.handleSignUpChange}
                handleLogIn={this.handleLogIn}
                handleSignUpSubmit={this.handleSignUpSubmit}
                />}
                />
                <Parallax bgImage="../../../hero.jpg" strength={400}>
                    <HeroContainer />
                </Parallax>
                <MainDiv users={this.state.users}
                loggedUser={this.state.loggedUser}
                signUp={this.state.signUp}
                handleLogInChange={this.handleLogInChange}
                handleSignUpChange={this.handleSignUpChange}
                handleLogIn={this.handleLogIn}
                handleSignUpSubmit={this.handleSignUpSubmit}/>
                </div>
                </MuiThemeProvider>
        );
    }
}

export default HomePage;