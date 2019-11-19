import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Background = styled.div `
background: #d1d5de ;
height:auto;
padding-bottom: 500px;
`

const Main = styled.div `
text-align: center;
display: flex;
flex-direction:column; 
align-items: center;
`

const Text = styled.p `
font-size: 2rem;
`

const StyledLink = styled(Link)`
font-family: 'Lato', sans-serif;
font-size: 4rem;
font-weight: 800;
background-color: #7e8d85;
color: white;
padding: 25px 50px;
text-align: center;
text-decoration: none;
margin: 30px; 
margin-bottom: 0px;
width: 40%;
border-radius: 6px;
border: solid #684943 5px;
:hover{
  background-color: #b3bfb8;
  color: #684943;
}
`

export default function HomePage() {
  return (
    <Background>
    <Main>
        <StyledLink to="/my-libs">My Dev-Libs</StyledLink>
        <Text>View your Dev-Libs, edit, or delete them!</Text>
        <StyledLink to="/catagories">Fill-Out a Dev-Lib</StyledLink> 
        <Text>Fill out a Dev-Lib and then share it with the world!</Text>
    </Main>
    </Background>
  );
}