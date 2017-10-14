import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
    state={
    user: {
      userName: '',
      password: '',
      cars: []
    }
  }

  async componentWillMount () {
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
  }

    render() {
        return (
            <div>
                {this.state.user.name} Page<br />
                {this.state.user.userName}<br />
                {this.state.user.cars.map(car => {
                    return (
                            <Link key={car._id} to={`/${this.state.user._id}/${car._id}`}>{car.model} {car.make}</Link>
                        )
                })}
            </div>
        );
    }
}

export default UserPage;