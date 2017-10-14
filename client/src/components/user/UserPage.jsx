import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
    state={
    user: {
        userName: '',
        name: '',
        cars: []
    }
  }

  async componentWillMount() {
    const { userName } = this.props.match.params
    const res = await axios.get(`/api/users/${userName}`)
    this.setState({user: res.data})
  }

    render() {
        const cars = this.state.user.cars.map(car => {
                    return (
                            <Link key={car._id} to={{
                                    pathname: `/${this.state.user.userName}/${car.make}${car.model}`,
                                    state: { userId: this.state.user._id, 
                                             carId: car._id }
                            }}>
                            {car.model} {car.make}
                            </Link>
                        )
                })
        return (
            <div>
                {this.state.user.name} Page<br />
                {this.state.user.userName}<br />
                {cars}
            </div>
        );
    }
}

export default UserPage;