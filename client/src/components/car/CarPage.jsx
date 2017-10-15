import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Car from './Car'
import Reports from './Reports.jsx'
import Tasks from './Tasks'

class CarPage extends Component {
    state={
    car: {
        make: '',
        model: '',
        mileage: '',
        year: '',
        tasks: [],
        reports: []
    },
    redirectBack: false,
  }

  deleteCar = async () => {
    try {
    const { userId, carId } = this.props.history.location.state 
    await axios.delete(`/api/users/${userId}/cars/${carId}`)
    this.setState({redirectBack: true})
    } catch (err) {
        console.log(err)
    }
  }

  async componentWillMount () {
    const { userId, carId } = this.props.history.location.state
    const res = await axios.get(`/api/users/${userId}/cars/${carId}`)
    this.setState({car: res.data})
  }


    render() {
        if (this.state.redirectBack) {
        return <Redirect to={`/user/${this.props.match.params.userName}`} />
        }
        return (
            <div>
                <div>
                {this.state.car.make}
                {this.state.car.model}
                <button onClick={this.deleteCar}>Delete</button>
                </div>

            </div>
        );
    }
}

export default CarPage;