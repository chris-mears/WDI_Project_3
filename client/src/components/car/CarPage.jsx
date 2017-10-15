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

  createReport = async (newReport) => {
    try {
    const { userId, carId } = this.props.history.location.state 
    const res = await axios.post(`/api/users/${userId}/cars/${carId}/reports/`)
    const car = res.data.cars.find(i => i._id === carId)
    this.setState({car})
    } catch (err) {
        console.log(err)
    }
  }

  createTask = async (newTask) => {
    try {
    const { userId, carId } = this.props.history.location.state 
    const res = await axios.post(`/api/users/${userId}/cars/${carId}/tasks/`, {
      task: newTask
    })
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
  
  handleTaskChange = (event, taskId) => {
    const attribute = event.target.name
    const clonedCar = {...this.state.car}
    const task = clonedCar.tasks.find(i => i._id === taskId)
    task[attribute] = event.target.value
    this.setState({car: clonedCar})
  }

  updateTask = async (taskId) => {
    const { userId, carId } = this.props.history.location.state
    const clonedCar = {...this.state.car}
    const task = clonedCar.tasks.find(i => i._id === taskId)
    const res = await axios.patch(`/api/users/${userId}/cars/${carId}/tasks/${taskId}`, {
      task: task
    })
    const car = res.data.cars.find(i => i._id === carId)
    this.setState({car})
  }

  handleReportChange = (event, reportId) => {
    const attribute = event.target.name
    const clonedCar = {...this.state.car}
    const report = clonedCar.reports.find(i => i._id === reportId)
    report[attribute] = event.target.value
    this.setState({car: clonedCar})
  }

  updateReport = async (reportId) => {
    const { userId, carId } = this.props.history.location.state
    const clonedCar = {...this.state.car}
    const report = clonedCar.reports.find(i => i._id === reportId)
    const res = await axios.patch(`/api/users/${userId}/cars/${carId}/reports/${reportId}`, {
      report: report
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
                <Tasks tasks={this.state.car.tasks} 
                deleteTask={this.deleteTask}
                createTask={this.createTask}
                handleTaskChange={this.handleTaskChange} 
                updateTask={this.updateTask} />
                <Reports serviceReports={this.state.car.reports} 
                deleteReport={this.deleteReport}
                createReport={this.createReport} 
                handleReportChange={this.handleReportChange} 
                updateReport={this.updateReport} />
            </div>
        );
    }
}

export default CarPage;