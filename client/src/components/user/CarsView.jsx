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
                                <Tasks />
                                <Reports />
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