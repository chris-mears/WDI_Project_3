import React, { Component } from 'react';
import styled from 'styled-components'

const LogoDiv= styled.div `
display: inline-block;
margin: 2px;
width: 30px;
img {
    width: 100%;
}`

class LogoIcon extends Component {
    render() {
        return (
            <LogoDiv>
                <img src="../../../carlog.png" alt="Logo" />
            </LogoDiv>
        );
    }
}

export default LogoIcon;