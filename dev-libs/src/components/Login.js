import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
    return (
        <div>
 <Form inline>
     <div className="Forms">         
      <FormGroup>
        <Label for="exampleEmail" hidden>
        <div className="inputName">Email</div></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
        <div className="inputName">Password</div></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      
     
      </div>
    </Form>
    
    <div className="Footer">
        Restaurant Passport @2019
    </div>
    </div>
  );
}

export default Login;