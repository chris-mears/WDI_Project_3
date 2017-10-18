import React, { Component } from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors';



const style = {
    textAlign: 'center',
    backgroundColor: cyan500,
    color: 'black',
     }
  const PaperContainer = styled.div `
        margin: 10px;
        width: 200px;  
        @media (max-width: 750px) {
            width: 140px;
        }
        @media (max-width: 500px) {
            width: 75px;
            margin: 5px;
            font-size: .6em;
        }
     `
  const Logo = styled.img`
        width: 125px;
        @media (max-width: 750px) {
           width: 75px;
          }
        @media (max-width: 500px) {
            width: 40px;
           }
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
                <PaperContainer key={car._id}>
                <Paper style={style} zDepth={2} rounded={true} onClick={() => this.props.showCar(car._id)} >
                    <h4>{car.title}</h4>
                    <Logo src="../../../carlog-inverted.png" alt="Carlog" />
                </Paper>
                </PaperContainer>
            )})
        return (
            <AvatarContainer>
                {cars}
            </AvatarContainer>
        );
    }
}

export default CarsAvatar;