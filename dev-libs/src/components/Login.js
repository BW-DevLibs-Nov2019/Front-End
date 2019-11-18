import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      <Button onClick="Submit">Submit</Button>
      
     
      </div>
    </Form>
    
    <div className="Footer">
        
    </div>
    </div>
  );
}

export default Login;