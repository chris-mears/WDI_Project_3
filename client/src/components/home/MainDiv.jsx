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
                <div>
                    <p>An app to track the health of your car because nobody will care for your care as much as you!</p></div>
                    <h3>Please Select an Existing User</h3>
                    {this.props.users.map(user => {return (<Link key={user._id} to={`/user/${user.userName}`}>{user.userName}<br /></Link>)})}
                    <LoginModal 
                loggedUser={this.props.loggedUser}
                signUp={this.props.signUp}
                handleLogInChange={this.props.handleLogInChange}
                handleSignUpChange={this.props.handleSignUpChange}
                handleLogIn={this.props.handleLogIn}
                handleSignUpSubmit={this.props.handleSignUpSubmit}
                user={this.props.user}
                loginError={this.props.loginError}
                signupError={this.props.signupError}
                handleRequestClose={this.props.handleRequestClose}
                />
            </MainContainer>
        );
    }
}

export default MainDiv;