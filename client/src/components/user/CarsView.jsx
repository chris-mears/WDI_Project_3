import React, {Component} from 'react'
import axios from 'axios'
import Car from './Car'
import Tasks from './Tasks'
import Reports from './Reports'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'

const FlexContainer = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const style = {
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    minWidth: '48%',
  };

class CarsView extends Component {
    state = {
        car: {
            _id: '',
           title: '',
           mileage: '',
           year: '',
           tasks: [],
           reports: []
        }
    }

    async componentWillMount() {
        console.log(this.props.user._id, this.props.carViewId)
        const res = await axios.get(`/api/users/${this.props.user._id}/cars/${this.props.carViewId}`)
        this.setState({car: res.data})
    }

    async componentWillUpdate() {
        console.log(this.props.user._id, this.props.carViewId)
        const res = await axios.get(`/api/users/${this.props.user._id}/cars/${this.props.carViewId}`)
        this.setState({car: res.data})
    }
    render() {
        return (
            <FlexContainer>
            <Paper style={style} zDepth={2} rounded={false} key={this.state.car._id}>
                    <Car 
                    car={this.state.car} 
                    user={this.props.user}
                    deleteCar={this.props.deleteCar} 
                    handleChange={this.props.handleChange}
                    updateCar={this.props.updateCar}/>
                    <Tasks tasks={this.state.car.tasks} 
                    userId={this.props.user._id}
                    carId={this.state.car._id}
                    deleteTask={this.props.deleteTask}
                    createTask={this.props.createTask}
                    handleTaskChange={this.props.handleTaskChange}
                    updateTask={this.props.updateTask}/>
                    <Reports reports={this.state.car.reports}
                    userId={this.props.user._id}
                    carId={this.state.car._id}
                    deleteReport={this.props.deleteReport}
                    createReport={this.props.createReport}
                    handleReportChange={this.props.handleReportChange}
                    updateReport={this.props.updateReport}/>
                </Paper>
            </FlexContainer>
            )
    }
}

export default CarsView;