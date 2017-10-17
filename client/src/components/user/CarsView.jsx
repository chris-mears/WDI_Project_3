import React, {Component} from 'react';
import Car from './Car'
import Tasks from './Tasks'
import Reports from './Reports'
import styled from 'styled-components'
import Paper from 'material-ui/Paper';

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
    render() {
        const cars = this.props.user.cars.map(car => {
                    return (
                        <Paper style={style} zDepth={2} rounded={false} key={car._id}>
                                <Car car={car} 
                                user={this.props.user}
                                deleteCar={this.props.deleteCar} 
                                handleChange={this.props.handleChange}
                                updateCar={this.props.updateCar}/>
                                <Tasks tasks={car.tasks} 
                                userId={this.props.user._id}
                                carId={car._id}
                                deleteTask={this.props.deleteTask}
                                createTask={this.props.createTask}
                                handleTaskChange={this.props.handleTaskChange}
                                updateTask={this.props.updateTask}/>
                                <Reports reports={car.reports}
                                userId={this.props.user._id}
                                carId={car._id}
                                deleteReport={this.props.deleteReport}
                                createReport={this.props.createReport}
                                handleReportChange={this.props.handleReportChange}
                                updateReport={this.props.updateReport}/>
                            </Paper>
                        )
                })
        return (
                <FlexContainer>
                    {cars}
                </FlexContainer>
        );
    }
}

export default CarsView;