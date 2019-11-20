import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Footer from "./Footer";
import styled from "styled-components";

const Error = styled.p`
color: red
`;

const Footer2 = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
`;


const Login = () => {

const [users, setUsers] = useState({
  username: "",
  primaryemail: "",
  password: ""
});
const [error, setError] = useState(false);

const handleChange = event => {
  event.preventDefault();
  setUsers({...users, [event.target.name]:event.target.value })
  setError(false)
}

const submitUser = user => {
  console.log(user);
  axiosWithAuth()
    .post('/createnewuser', users)
    .then(res => console.log(res))
    .catch(err => (setError(true), console.log(err)))
};

    return (
        <div>
 <Form inline>
 <div className="header">
                <h1>Welcome Back!</h1>
                </div>
     <div className="Forms">         
      <FormGroup>
        <Label for="userName" hidden>
        <div className="inputName">Username</div></Label>
        <Input type="username" name="username" id="username" placeholder="Username" />
      </FormGroup>
      
      <FormGroup>
        <Label for="examplePassword" hidden>
        <div className="inputName">Password</div></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
     
      <Button onClick="Submit">Submit</Button>
      
     
      </div>
    </Form>
    
    <Footer2>
      <Footer />
      </Footer2>
    </div>
  );
}

export default Login;