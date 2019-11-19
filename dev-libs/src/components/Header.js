import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Logo from "../images/Dev-Libs-Logo.png"

const Title = styled.h1`
  display: flex;
  justify-content: space-around;
  background: #7e8d85;
  align-items: center;
  margin: 0px;
`;

const Links =styled.div`
text-align: center;
`

const TitleLink = styled(Link)`
  font-size: 6rem;
  text-align: center;
  color: white;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
`;

const Image = styled.img`
max-width:10%;
height:auto;
`;

const Bar = styled.div`
background: #684943;
padding 5px;
`;

const HeaderLink = styled(Link) `
color: #353238;
padding: 14px 25px;
margin-left: 30px;
text-align: center;
text-decoration: none;
display: inline-block;
:hover{
}
`

export default function Header() {

const logout = () => {
    localStorage.removeItem("token");
}

  return (
    <header className="ui centered">
      <Title>
          <TitleLink to ="/home">Dev <Image src={Logo} alt="Logo"></Image> Libs</TitleLink>
          <Links>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
          </Links>
      </Title>
      <Bar />
    </header>
  );
}
