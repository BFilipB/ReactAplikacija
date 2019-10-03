import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { validateFirstName, validatelastName, validateUsername, validatePassowrd, validateEmail } from '../containers/validators';
import { Form, Field } from 'react-final-form';
import LoginForm from '../containers/forms/LoginForm';
import RegisterForm from '../containers/forms/RegisterForm';
import './InputFields.css'



export const InputField = (props) => {
  console.log("PROOOPS ", props);
  return(
  <InputGroup size="lg" className="mb-4">
  <FormControl 
     placeholder={props.floatingLabelText}
     type={props.input.type}
     
     
  />
  <div className="ValidatorStyle">
  {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
  </div>
  </InputGroup>
)}

//  export const InputEmail = ({ }) => (
//     <InputGroup className="mb-4">
    
// //     <FormControl
//       placeholder="Email"
//       aria-label="Email"
//       aria-describedby="basic-addon1"
//     />
//     <InputGroup.Prepend>
//      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//      </InputGroup.Prepend>
//    </InputGroup>

//  )

//  export const InputFirstName = ({ }) => (
//      <InputGroup className="mb-4">
//       <FormControl
//        placeholder="First Name"
//       aria-label="FirstName"
//        aria-describedby="basic-addon1"
//      />
//      <InputGroup.Prepend>
//      <InputGroup.Text id="basic-addon1">FN</InputGroup.Text>
//      </InputGroup.Prepend>
//    </InputGroup>

//  )

//  export const InputLastName = ({ }) => (
//      <InputGroup className="mb-4">
   
//      <FormControl
//       placeholder="Last Name"
//        aria-label="Last Name"
//       aria-describedby="basic-addon1"
//      />
//      <InputGroup.Prepend>
//      <InputGroup.Text id="basic-addon1">LN</InputGroup.Text>
//      </InputGroup.Prepend>
//   </InputGroup>

//  )

// //  export const SubmitButtonRegister = ({ }) => (
// //     <Button as="input" type="submit" value="Register" size="lg" onClick={console.log("Clickable button")}/>

// //  )

// //  export const SubmitButtonLogin = ({ }) => (
// //      <Button as="input" type="submit" value="Login" size="lg"/>
 
// //   )
//  export const InputUsername = ({ }) => (
//      <InputGroup className="mb-4">
//      <FormControl
//        placeholder="Username"
//        aria-label="Username"
//        aria-describedby="basic-addon1"
//      />
//       <InputGroup.Prepend>
//      <InputGroup.Text id="basic-addon1">UR</InputGroup.Text>
//     </InputGroup.Prepend>
//    </InputGroup>

//  )

