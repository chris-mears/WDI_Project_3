import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    state = {
        users: []
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

    render() {
        return (
            <div>
                <h3>Please Select an Existing User</h3>
                {this
                    .state
                    .users
                    .map(user => {
                        return (
                            <Link key={user._id} to={`/${user._id}`}>{user.userName}</Link>
                        )
                    })}
            </div>
        );
    }
}

export default HomePage;