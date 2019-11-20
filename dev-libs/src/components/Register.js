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


const Register = () => {

const [users, setUsers] = useState([]);
const [error, setError] = useState(false);

const handleChange = event => {
  setUsers({...users, [event.target.name]:event.target.value })
}

const submitUser = user => {
  console.log(user);
  axiosWithAuth()
    .post('/createnewuser', users)
    .then(res => console.log(res))
    .catch(err => (setError(true), console.log(err)))
};

    return (
        <div className="Register">
      <Form inline>
          
          <div className="Forms">
          <FormGroup>
          <Label for="exampleUsername" hidden>
  
              <div className= "inputName">Username</div>
              </Label>
          <Input type="Username" name="username" id="exampleUsername" placeholder="Username" onChange={handleChange} value={users.username} />
        </FormGroup>
        {' '}
        
        <FormGroup>
          <Label for="examplePassword" hidden>
              <div className="inputName">Password</div></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={handleChange} value={users.password} />
        </FormGroup>
        {' '}
        <Button onClick= {() => submitUser(users)}>Submit</Button>
        <div>
      { error
        ? <Error>Failed to Register</Error>
        : <></>
      }
    </div>
        <p>Already a member?</p>
      <Link to ="/login">
        <Button>Click Here</Button>
      </Link>
        </div>
      </Form>
      <Footer2>
      <Footer />
      </Footer2>
      </div>
    );
  }
  
  export default Register;