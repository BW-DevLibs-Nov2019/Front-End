import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
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
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
        <div className="inputName">Password</div></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button onClick="Submit">Submit</Button>
      
     
      </div>
    </Form>
    
    <div className="Footer">
        
    </div>
    </div>
  );
}

export default Login;