import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Footer from "./Footer";
import styled from "styled-components";
import { tsPropertySignature } from '@babel/types';

const Error = styled.p`
color: red
`;

const Footer2 = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
`;


const Login = (props) => {

const [users, setUsers] = useState({
  username: "",
  password: ""
});
const [error, setError] = useState(false);

const handleChange = event => {
  event.preventDefault();
  setUsers({...users, [event.target.name]:event.target.value })
  setError(false)
}

const handleSubmit = user => {
  console.log(user);
  axiosWithAuth()
  .post('/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
    headers: {
      Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
      'Content-Type' : 'application/x-www-form-urlencoded'
    }
  })
  .then(res => {
    console.log(res)
    localStorage.setItem('token', res.data.access_token);
    props.history.push('/home')
  })
  .catch(err => console.log(err.response));
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
        <Input type="username" name="username" id="username" placeholder="Username"  onChange={handleChange} value={users.username} />
      </FormGroup>
      
      <FormGroup>
        <Label for="examplePassword" hidden>
        <div className="inputName">Password</div></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password"  onChange={handleChange} value={users.password} />
      </FormGroup>
     
      <Button onClick= {() => handleSubmit(users)}>Submit</Button>
      
     
      </div>
    </Form>
    
    <Footer2>
      <Footer />
      </Footer2>
    </div>
  );
}

export default Login;


//ed3a6cbf-e903-4570-b8b7-36d9e3935634

