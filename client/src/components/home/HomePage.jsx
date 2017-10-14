import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect } from 'react-router-dom'

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
            <div>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => {return (<Link key={user._id} to={`/${user.username}`}>{user.userName}<br /></Link>)})}
                <form onSubmit={this.handleLogIn}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input
                            onChange={this.handleLogInChange}
                            name="userName"
                            type="text"
                            value={this.state.loggedUser.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={this.handleLogInChange}
                            value={this.state.loggedUser.password}
                            name="password"
                            type="password"/>
                    </div>
                    <button>Login</button>
                </form>

                <form onSubmit={this.handleSignUpSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input
                            onChange={this.handleSignUpChange}
                            name="userName"
                            type="text"
                            value={this.state.signUp.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={this.handleSignUpChange}
                            value={this.state.signUp.password}
                            name="password"
                            type="password"/>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={this.handleSignUpChange}
                            value={this.state.signUp.name}
                            name="name"
                            type="text"/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default HomePage;