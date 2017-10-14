import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
    state={
    user: {
        userName: '',
        name: '',
        cars: []
    },
    newCar: {
        make: '',
        model: ''
    }
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateCar = {...this.state.newCar}
    updateCar[attribute] = event.target.value
    this.setState({newCar: updateCar})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
    const res = await axios.post(`/api/users/${this.state.user._id}/cars`, {
      'car': this.state.newCar
    })
    this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }
  }

  deleteCar = async (carId) => {
    try {
    const res = await axios.delete(`/api/users/${this.state.user._id}/cars/${carId}`)
    this.setState({user: res.data})
    } catch (err) {
        console.log(err)
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
                            <div key={car._id}>
                            <Link to={{
                                    pathname: `/${this.state.user.userName}/${car.make}${car.model}`,
                                    state: { userId: this.state.user._id, 
                                             carId: car._id }
                            }}>
                            {car.make} {car.model}
                            </Link>
                            <button onClick={() => this.deleteCar(car._id)}>Delete</button>
                            </div>
                        )
                })
        return (
            <div>
                {this.state.user.name} Page<br />
                {this.state.user.userName}<br />
                <form onSubmit={this.handleSubmit}>
                <div>
                        <label htmlFor="make">Make</label>
                        <input
                            onChange={this.handleChange}
                            name="make"
                            type="text"
                            value={this.state.newCar.make}/>
                </div>
                <div>
                        <label htmlFor="model">Model</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newCar.model}
                            name="model"
                            type="text"/>
                </div>
                    <button>New Car</button>
                </form>
                {cars}
            </div>
        );
    }
}

export default UserPage;