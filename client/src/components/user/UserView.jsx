import React, {Component} from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CarsAvatar from './CarsAvatar'

const style = {
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black'
};

const UserContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center
    width: 100%;
`

const TitleDiv = styled.div `
    margin: 10px 20px;
`

const UserHeader = styled.h2 `
    margin: 0;
    color: #636363;
    font-size: 2em;
    font-weight: bold;
    text-align: left;
`

class UserView extends Component {
    render() {
        return (
            <UserContainer>
                <Paper style={style} zDepth={2} rounded={false}>
                    <TitleDiv>
                        <UserHeader>{this.props.user.name}</UserHeader>
                        <hr/>
                    </TitleDiv>
                    <FlatButton label="New Car" primary={true} onClick={this.props.handleSubmit}/>
                    <CarsAvatar cars={this.props.user.cars} showCar={this.props.showCar}/>
                </Paper>
            </UserContainer>
        );
    }
}

export default UserView;