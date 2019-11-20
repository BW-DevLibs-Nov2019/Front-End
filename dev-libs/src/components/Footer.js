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


export default function Footer() {

  return (
    <footer>
    <Bar />
      <Title>
          <p> © Dev-Libs 2019</p>
          <TitleLink to ="/home">Dev <Image src={Logo} alt="Logo"></Image> Libs</TitleLink>
          <a href = "https://dev-libs-bwmarketing.netlify.com/"> Marketing Page</a>
      </Title>
    </footer>
  );
}
