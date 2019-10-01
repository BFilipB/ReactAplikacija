import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { validateFirstName, validatelastName, validateUsername, validatePassowrd, validateEmail } from '../containers/validators';


export const InputUsername = ({ }) => (
    <InputGroup className="mb-4">
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
     <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">UR</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)
export const InputPassword = ({ }) => (
    <InputGroup className="mb-4">
    
    <FormControl
      type="password"
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon2">PW</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)

export const InputEmail = ({ }) => (
    <InputGroup className="mb-4">
    
    <FormControl
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)

export const InputFirstName = ({ }) => (
    <InputGroup className="mb-4">
     <FormControl
      placeholder="First Name"
      aria-label="FirstName"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">FN</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)

export const InputLastName = ({ }) => (
    <InputGroup className="mb-4">
   
    <FormControl
      placeholder="Last Name"
      aria-label="Last Name"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">LN</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>

)

// export const SubmitButtonRegister = ({ }) => (
//    <Button as="input" type="submit" value="Register" size="lg" onClick={console.log("Clickable button")}/>

// )

// export const SubmitButtonLogin = ({ }) => (
//     <Button as="input" type="submit" value="Login" size="lg"/>
 
//  )