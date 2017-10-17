import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CarsAvatar from './CarsAvatar'

const style = {
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black'
  };

class UserView extends Component {
    render() {
        return (
            <div>
                <Paper style={style} zDepth={2} rounded={false}>
                <h2>{this.props.user.name} Page</h2>
                <FlatButton 
                label="New Car" 
                primary={true} 
                onClick={this.props.handleSubmit} />
                <CarsAvatar cars={this.props.user.cars} showCar={this.props.showCar} />
                </Paper>
            </div>
        );
    }
}

export default UserView;