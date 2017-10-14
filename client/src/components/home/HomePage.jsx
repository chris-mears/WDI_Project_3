import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect } from 'react-router-dom'

class HomePage extends Component {
    state = {
        users: [],
        user: {},
        signInUser: {
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

    handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.signInUser}
    updateUser[attribute] = event.target.value
    this.setState({signInUser: updateUser})
  }

  handleLogin = async (event) => {
    event.preventDefault()
    try {
        const res = await axios.post('/api/users/signin', {
      'user': this.state.signInUser
    })
    this.setState({user: res.data})
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
                {this.state.users.map(user => {return (<Link key={user._id} to={`/${user._id}`}>{user.userName}</Link>)})}
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input
                            onChange={this.handleChange}
                            name="userName"
                            type="text"
                            value={this.state.signInUser.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.signInUser.password}
                            name="password"
                            type="text"/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default HomePage;