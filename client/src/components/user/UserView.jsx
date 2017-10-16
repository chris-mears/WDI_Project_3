import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
                <h2>{this.props.name} Page</h2>
                <form onSubmit={this.props.handleSubmit}>
                <div>
                        <TextField
                            hintText="Make"
                            onChange={this.props.handleNewChange}
                            name="make"
                            type="text"
                            value={this.props.newCar.make}/>
                </div>
                <div>
                            <TextField
                            hintText="Make"
                            onChange={this.props.handleNewChange}
                            value={this.props.newCar.model}
                            name="model"
                            type="text"/>
                </div>
                <FlatButton label="New Car" primary={true} type="submit" />
                </form>
                </Paper>
            </div>
        );
    }
}

export default UserView;