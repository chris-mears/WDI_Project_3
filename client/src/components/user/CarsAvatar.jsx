import React, { Component } from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const style = {
    margin: '10px',
    textAlign: 'center',
    backgroundColor: cyan500,
    color: 'black',
    width: '200px',
  };
  const Logo = styled.img`
        width: 125px;
  `

const AvatarContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
`

class CarsAvatar extends Component {
    render() {
        const cars = this.props.cars.map(car => {
            return (
                <Paper style={style} zDepth={2} rounded={true} key={car._id} onClick={() => this.props.showCar(car._id)} >
                    <h4>{car.title}</h4>
                    <Logo src="../../../carlog-inverted.png" alt="Carlog" />
                </Paper>
            )})
        return (
            <AvatarContainer>
                {cars}
            </AvatarContainer>
        );
    }
}

export default CarsAvatar;