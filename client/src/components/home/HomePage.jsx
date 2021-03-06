import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import LoginModal from './LoginModal'
import LogoIcon from '../LogoIcon'
import {Parallax} from 'react-parallax';
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
        redirectToUser: false,
        loginError: false,
        signupError: false
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
            this.setState({error: err})
        }
    }

    //handles the change of the state for the form as the user tries to log in
    handleLogInChange = (event) => {
        const attribute = event.target.name
        const updateUser = {
            ...this.state.loggedUser
        }
        updateUser[attribute] = event.target.value
        this.setState({loggedUser: updateUser})
    }

    //handles the change of state for form as user tries to sign up
    handleSignUpChange = (event) => {
        const attribute = event.target.name
        const updateUser = {
            ...this.state.signUp
        }
        updateUser[attribute] = event.target.value
        this.setState({signUp: updateUser})
    }

    // When user logins in checks db to see if user is there and pulls data or
    // returns user an error
    handleLogIn = async(event) => {
        event.preventDefault()
        try {
            const res = await axios.post('/api/users/signin', {'user': this.state.loggedUser})
            this.setState({user: res.data})
        } catch (err) {
            this.setState({error: err})
        }
        if (this.state.user !== null) {
            this.setState({redirectToUser: true})
        } else {
            this.handleLoginError()
        }
    }

    // when user tries to sign up checks the db and either creates a user or sends an
    // error back
    handleSignUpSubmit = async(event) => {
        event.preventDefault()
        try {
            const res = await axios.post('/api/users/', {'user': this.state.signUp})
            this.setState({user: res.data})
        } catch (err) {
            console.log(err)
        }
        if (this.state.user.code !== 11000) {
            //this.setState({redirectToUser: true})
        } else {
            this.handleSignUpError()
        }
    }

    //if login error handles functionality to display error message
    handleLoginError = () => {
        if (this.state.user == null) {
            this.setState({loginError: true})
        }
    }

    //if sign up error handles functionality to display error message
    handleSignUpError = () => {
        if (this.state.user.code === 11000) {
            this.setState({signupError: true})
        }
    }

    //closes error message after message has been displayed
    handleRequestClose = () => {
        this.setState({loginError: false, signupError: false});
    };

    render() {
        if (this.state.redirectToUser) {
            return <Redirect to={`/user/${this.state.user.userName}`}/>
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <AppBar
                        title="CarLog"
                        iconElementLeft={< LogoIcon />}
                        iconElementRight={< LoginModal loggedUser = {
                        this.state.loggedUser
                    }
                    signUp = {
                        this.state.signUp
                    }
                    handleLogInChange = {
                        this.handleLogInChange
                    }
                    handleSignUpChange = {
                        this.handleSignUpChange
                    }
                    handleLogIn = {
                        this.handleLogIn
                    }
                    handleSignUpSubmit = {
                        this.handleSignUpSubmit
                    }
                    user = {
                        this.state.user
                    }
                    loginError = {
                        this.state.loginError
                    }
                    signupError = {
                        this.state.signupError
                    }
                    handleRequestClose = {
                        this.handleRequestClose
                    } />}/>

                    <Parallax bgImage="../../../hero-opt.jpg" strength={400}>
                        <HeroContainer/>
                    </Parallax>
                    
                    <MainDiv
                        users={this.state.users}
                        loggedUser={this.state.loggedUser}
                        signUp={this.state.signUp}
                        handleLogInChange={this.handleLogInChange}
                        handleSignUpChange={this.handleSignUpChange}
                        handleLogIn={this.handleLogIn}
                        handleSignUpSubmit={this.handleSignUpSubmit}
                        user={this.state.user}
                        loginError={this.state.loginError}
                        signupError={this.state.signupError}
                        handleRequestClose={this.handleRequestClose}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;