import React, { Component } from 'react';
import axios from 'axios'

class CarPage extends Component {
    state={
    car: {
        make: '',
        model: '',
        mileage: '',
        year: '',
        tasks: [],
        reports: []
    }
  }

  async componentWillMount () {
    const { userId, carId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}/${carId}`)
    this.setState({car: res.data})
  }

    render() {
        return (
            <div>
                <br />
                {this.state.car.make}
                {this.state.car.model}<br />
                {this.state.car.year}
            </div>
        );
    }
}

export default CarPage;