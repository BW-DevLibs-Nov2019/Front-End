import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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

const Center = styled.div`
display: flex;
text-align: center;
justify-content: center;
`


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
  axiosWithAuth()
  .post('/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
    headers: {
      Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
      'Content-Type' : 'application/x-www-form-urlencoded'
    }
  })
  .then(res => {
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('username', user.username);
    props.history.push('/home')
    window.location.reload();
  })
  .catch(err => (setError(true)));
};

    return (
        <div>
          <Center>
 <Form inline>
 <div className="header">
                <h1> Log In </h1>
                <h2>Welcome Back!</h2>
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
      <div>
      { error
        ? <Error>Failed to Login</Error>
        : <></>
      }
    </div>
     
      </div>
    </Form>
    </Center>
    <Footer2>
      <Footer />
      </Footer2>
    </div>
  );
}

export default Login;
