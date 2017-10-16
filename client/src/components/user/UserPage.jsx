import React, { Component } from 'react';
import axios from 'axios'
import CarsView from './CarsView'
import NavBar from '../Nav/NavBar'

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

  handleNewChange = (event) => {
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

  deleteTask = async (carId, taskId) => {
    try {
    const res = await axios.delete(`/api/users/${this.state.user._id}/cars/${carId}/tasks/${taskId}`)
    this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }
  }

  deleteReport = async (carId, reportId) => {
    try {
    const res = await axios.delete(`/api/users/${this.state.user._id}/cars/${carId}/reports/${reportId}`)
    this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }
  }
  
  createReport = async (carId) => {
    try {
    const res = await axios.post(`/api/users/${this.state.user._id}/cars/${carId}/reports/`)
    this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }
  }

  createTask = async (carId, newTask) => {
    try { 
    const res = await axios.post(`/api/users/${this.state.user._id}/cars/${carId}/tasks/`, {
      task: newTask
    })
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

  handleChange = (event, carId) => {
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    car[attribute] = event.target.value
    this.setState({user: clonedUser})
  }
  // Trigger patch when leaving an input field
  updateCar = async (userId, carId) => {
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    const res = await axios.patch(`/api/users/${userId}/cars/${carId}`, {
      car: car
    })
    this.setState({user: res.data})
  }

  handleTaskChange = (event, carId, taskId) => {
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    const task = car.tasks.find(i => i._id === taskId)
    task[attribute] = event.target.value
    this.setState({user: clonedUser})
  }

  updateTask = async (carId, taskId) => {
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    const task = car.tasks.find(i => i._id === taskId)
    const res = await axios.patch(`/api/users/${this.state.user._id}/cars/${carId}/tasks/${taskId}`, {
      task: task
    })
    this.setState({user: res.data})
  }

  handleReportChange = (event, carId, reportId) => {
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    const report = car.reports.find(i => i._id === reportId)
    report[attribute] = event.target.value
    this.setState({user: clonedUser})
  }

  updateReport = async (carId, reportId) => {
    const clonedUser = {...this.state.user}
    const car = clonedUser.cars.find(i => i._id === carId)
    const report = car.reports.find(i => i._id === reportId)
    const res = await axios.patch(`/api/users/${this.state.user._id}/cars/${carId}/reports/${reportId}`, {
      report: report
    })
    this.setState({user: res.data})
  }

    render() {
        return (
            <div>
                <NavBar />
                <h2>{this.state.user.name} Page</h2>
                <form onSubmit={this.handleSubmit}>
                <div>
                        <label htmlFor="make">Make</label>
                        <input
                            onChange={this.handleNewChange}
                            name="make"
                            type="text"
                            value={this.state.newCar.make}/>
                </div>
                <div>
                        <label htmlFor="model">Model</label>
                        <input
                            onChange={this.handleNewChange}
                            value={this.state.newCar.model}
                            name="model"
                            type="text"/>
                </div>
                    <button>New Car</button>
                </form>
                <CarsView user={this.state.user} 
                deleteCar={this.deleteCar} 
                handleChange={this.handleChange}
                updateCar={this.updateCar}
                deleteTask={this.deleteTask}
                deleteReport={this.deleteReport}
                createReport={this.createReport}
                createTask={this.createTask}
                handleTaskChange={this.handleTaskChange}
                handleReportChange={this.handleReportChange}
                updateTask={this.updateTask}
                updateReport={this.updateReport}/>
            </div>
        );
    }
}

export default UserPage;