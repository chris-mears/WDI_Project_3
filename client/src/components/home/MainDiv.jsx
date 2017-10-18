import React, { Component } from 'react';
import styled from 'styled-components'
import LoginModal from './LoginModal'

const MainContainer = styled.div `
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
`


class MainDiv extends Component {
    render() {
        return (
            <MainContainer>
                    <p>An app to track the health of your car because nobody will care for your care as much as you!</p>
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