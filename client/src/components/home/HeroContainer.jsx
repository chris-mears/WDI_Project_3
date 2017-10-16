import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeroDiv = styled.div `
height: 400px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.4);

div {
    font-weight: bolder;
    font-size: 1.8rem;
    margin: 80px;
}
div h2, div p {
    margin: 0;
}
img {
    margin: 20px 0 20px 80px;
    height: 50%;
}
`


class HeroContainer extends Component {
    render() {
        return (
            <HeroDiv>
                <img src="../../../carlog.png" alt="logo" />
                <div><h2>Welcome to CarLog</h2> 
                    <p>An app to track the health of your car because nobody will care for your care as much as you!</p></div>
            </HeroDiv>
        );
    }
}

export default HeroContainer;