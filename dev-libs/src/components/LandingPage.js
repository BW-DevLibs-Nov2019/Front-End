import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Main = styled.div `
text-align: center;
`

const Background = styled.div `
background: #d1d5de ;
height:auto;
padding-bottom: 500px;
`

const StyledLink = styled(Link)`
font-family: 'Lato', sans-serif;
font-size: 4rem;
font-weight: 800;
background-color: #7e8d85;
color: white;
padding: 50px 100px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 30px;
border-radius: 6px;
border: solid #684943 5px;
:hover{
  background-color: #b3bfb8;
  color: #684943;
}
`

export default function LandingPage() {

  return (
    <Background>
    <Main>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
    </Main>
    </Background>
  );
}