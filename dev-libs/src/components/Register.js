import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom"
const Register = (props) => {
    return (
        <div className="Register">
      <Form inline>
          
          <div className="Forms">
          <FormGroup>
          <Label for="exampleUsername" hidden>
  
              <div className= "inputName">Username</div>
              </Label>
          <Input type="Username" name="Username" id="exampleUsername" placeholder="Username" />
        </FormGroup>
        {' '}
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
       
        <Link to ="/">
          <Button onClick="Click Here">Click Here</Button>
        </Link>
        
        </div>
      </Form>
      
      <div className="Footer">
         
      </div>
      </div>
    );
  }
  
  export default Register;