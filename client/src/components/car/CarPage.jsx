import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Car from './Car'
import Reports from './Reports'
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

  deleteTask = async (taskId) => {
    try {
    const { userId, carId } = this.props.history.location.state 
    const res = await axios.delete(`/api/users/${userId}/cars/${carId}/tasks/${taskId}`)
    const car = res.data.cars.find(i => i._id === carId)
    this.setState({car})
    } catch (err) {
        console.log(err)
    }
  }

  deleteReport = async (reportId) => {
    try {
      const { userId, carId } = this.props.history.location.state 
    const res = await axios.delete(`/api/users/${userId}/cars/${carId}/reports/${reportId}`)
    const car = res.data.cars.find(i => i._id === carId)
    this.setState({car})
    } catch (err) {
        console.log(err)
    }
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const clonedCar = {...this.state.car}
    clonedCar[attribute] = event.target.value
    this.setState({car: clonedCar})
  }

  updateCar = async () => {
    const { userId, carId } = this.props.history.location.state
    const res = await axios.patch(`/api/users/${userId}/cars/${carId}`, {
      car: this.state.car
    })
    const car = res.data.cars.find(i => i._id === carId)
    this.setState({car})
  }

  async componentWillMount() {
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
                <Car  car={this.state.car} 
                deleteCar={this.deleteCar}
                handleChange={this.handleChange}
                updateCar={this.updateCar}/>
                <Tasks tasks={this.state.car.tasks} deleteTask={this.deleteTask}/>
                <Reports reports={this.state.car.reports} deleteReport={this.deleteReport}/>
            </div>
        );
    }
}

export default CarPage;