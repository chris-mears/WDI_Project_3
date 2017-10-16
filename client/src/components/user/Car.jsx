import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

//From https://stackoverflow.com/questions/32602151/how-can-i-make-a-fluid-text-input-using-react-which-resizes-based-on-the-conten
//const makeSize = this.props.car.make.length + 'em'
const CarDiv = styled.div`
  margin: 20px;

  input {
    font-weight: bold;
  }
  input {
    display: block;
    font-size: 1.2rem;
    border: none;
    background-color: initial;
  }
`

class Car extends Component {
    state = {
        linkToCar: false,
    }

    goToCar = () => {
        this.setState({linkToCar: true})
    }

    handleChange = (event) => {
    this.props.handleChange(event, this.props.car._id)
  }
  updateCar = () => {
    this.props.updateCar(this.props.user._id, this.props.car._id)
  }
    
    render() {
        if (this.state.linkToCar) {
        return (<Redirect to={{pathname: `/user/${this.props.user.userName}/${this.props.car.make}${this.props.car.model}`,
                                    state: { userId: this.props.user._id, 
                                             carId: this.props.car._id }
                            }} />)
        }
        return (
            <CarDiv key={this.props.car._id}>
                <div>
                <TextField
                 onBlur={this.updateCar} 
                 onChange={this.handleChange}
                 name="make" 
                 value={this.props.car.make}
                 style={{width: this.props.car.make.length + 'em', fontSize: '1.2em',}}
                 inputStyle={{textAlign: 'center', minWidth: '8px', padding: '1px', fontWeight: 'bolder', boxSizing: 'border-box'}} />
                <TextField 
                onBlur={this.updateCar} 
                onChange={this.handleChange} 
                name="model" 
                value={this.props.car.model} 
                style={{width: this.props.car.model.length + 'em', fontSize: '1.2em'}}
                inputStyle={{textAlign: 'center', minWidth: '8px', padding: '1px', fontWeight: 'bolder', boxSizing: 'border-box'}} />
                </div>
                <p><span>{this.props.car.year}</span> - <span>Mileage: {this.props.car.mileage}</span></p>
                <FlatButton label="Go To Car" onClick={this.goToCar} primary={true} type="submit" />
                <FlatButton label="Delete" onClick={() => this.props.deleteCar(this.props.car._id)} secondary={true} />
                <hr />
            </CarDiv>
        );
    }
}

export default Car;