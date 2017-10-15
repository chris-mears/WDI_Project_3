import React, {Component} from 'react';
import Car from './Car'
import Tasks from './Tasks'
import Reports from './Reports'

class CarsView extends Component {
    render() {
        const cars = this.props.user.cars.map(car => {
                    return (
                            <div key={car._id}>
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
                            </div>
                        )
                })
        return (
                <div>
                    {cars}
                </div>
        );
    }
}

export default CarsView;