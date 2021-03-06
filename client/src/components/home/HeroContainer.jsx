import React, {Component} from 'react';
import styled from 'styled-components'

const HeroDiv = styled.div `
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
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
    height: 50%;
}
`

class HeroContainer extends Component {
    render() {
        return (
            <HeroDiv>
                <h2>Welcome to CarLog</h2>
                <img src="../../../carlog.png" alt="logo"/>
            </HeroDiv>
        );
    }
}

export default HeroContainer;