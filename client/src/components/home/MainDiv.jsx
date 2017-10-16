import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LoginModal from './LoginModal'

const MainContainer = styled.div `
height: 1000px;
`


class MainDiv extends Component {
    render() {
        return (
            <MainContainer>
                <br/>
                    <h3>Please Select an Existing User</h3>
                    {this.props.users.map(user => {return (<Link key={user._id} to={`/user/${user.userName}`}>{user.userName}<br /></Link>)})}
                    <LoginModal 
                loggedUser={this.props.loggedUser}
                signUp={this.props.signUp}
                handleLogInChange={this.props.handleLogInChange}
                handleSignUpChange={this.props.handleSignUpChange}
                handleLogIn={this.props.handleLogIn}
                handleSignUpSubmit={this.props.handleSignUpSubmit}
                />
            </MainContainer>
        );
    }
}

export default MainDiv;