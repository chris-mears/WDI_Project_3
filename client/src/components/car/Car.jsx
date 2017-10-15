import React, { Component } from 'react';
import styled from 'styled-components'

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
    handleChange = (event) => {
        this.props.handleChange(event, this.props.car._id)
      }
      updateCar = () => {
        this.props.updateCar()
      }
        
        render() {
            return (
                //onBlur={updateCar}
                <CarDiv key={this.props.car._id}>
                    <div>
                    <input onBlur={this.updateCar} onChange={this.handleChange} name="make" value={this.props.car.make} />
                    <input onBlur={this.updateCar} onChange={this.handleChange} name="model" value={this.props.car.model} />
                    </div>
                    <button onClick={() => this.props.deleteCar(this.props.car._id)}>Delete</button>
                </CarDiv>
            );
        }
    }

export default Car;