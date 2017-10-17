import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

//From https://stackoverflow.com/questions/32602151/how-can-i-make-a-fluid-text-input-using-react-which-resizes-based-on-the-conten
//const makeSize = this.props.car.make.length + 'em'
const CarDiv = styled.div`
  margin: 20px;
`

class Car extends Component {
    handleChange = (event) => {
    this.props.handleChange(event, this.props.car._id)
  }
  updateCar = () => {
    this.props.updateCar(this.props.user._id, this.props.car._id)
  }
    
    render() {
        return (
            <CarDiv key={this.props.car._id}>
                <div>
                <TextField
                 onBlur={this.updateCar} 
                 onChange={this.handleChange}
                 name="title" 
                 value={this.props.car.title}
                 style={{width: this.props.car.title.length + 'em', fontSize: '1.2em',}}
                 inputStyle={{textAlign: 'center', minWidth: '8px', padding: '1px', fontWeight: 'bolder', boxSizing: 'border-box'}} />
                </div>
                <p><span>{this.props.car.year}</span> - <span>Mileage: {this.props.car.mileage}</span></p>
                <FlatButton label="Delete" onClick={() => this.props.deleteCar(this.props.car._id)} secondary={true} />
                <hr />
            </CarDiv>
        );
    }
}

export default Car;