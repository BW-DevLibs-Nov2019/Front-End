import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


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
width: auto;
border-radius: 6px;
border: solid #684943 5px;
:hover{
  background-color: #b3bfb8;
  color: #684943;
}
`

const Categories = props => {

  return (
    <Background>
    <Main>
        <h2>Pick a Dev Lib</h2>
        {props.devlibs.map((lib, index) => (
        <StyledLink to={`/devlib/${lib.id}`} key={index}>{lib.title}</StyledLink> 
        ))}
    </Main>
    </Background>
  );
}

const mapStateToProps = state => {
	return {
		devlibs: state.devlibs,
	};
};

export default connect(
	mapStateToProps,
	{},
)(Categories);
