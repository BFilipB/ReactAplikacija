import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
}

const formValidation = (values) => {
  const errors = {};

if(!values.firstName){
   errors.firstName = "Name is required"
}

if(!values.lastName){
   errors.lastName = "Name is required"
}

if(!values.email){
   errors.email = "Email is required"
}

if(!values.password){
   errors.password = "Password is required"
}

if(!values.username){
   errors.username = "Username is required"
}
  return errors;
};

const InputUsername = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)
const InputPassword = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)
const InputEmail = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)
const InputFirstName = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="First Name"
      aria-label="FirstName"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)
const InputLastName = ({ }) => (
    <InputGroup className="mb-4">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Last Name"
      aria-label="Last Name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

)
const SubmitButton = ({ }) => (
   <Button as="input" type="submit" value="Register" size="lg"/>

)


class FinalForm extends Component {
    render(){
        return (
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 container ">
                <div className="header mt-3">
                    <h5>Register Form</h5>
                </div>  
                   
                <Form 
                validate={formValidation}
                onSubmit={onSubmit}
                render= { ( { onSubmit, form, submitting, pristine, values, valid }) => (
                  <form onSubmit={onsubmit}>
                        <fieldset>
                        <Field
                        name="firstName"
                        component={InputFirstName}
                        
                        hintText="First Name"
                        floatingLabelText="First Name"
                        />
                       <Field 
                        name="lastName"
                        component={InputLastName}
                        
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        />
                   <Field 
                        name="username"
                        component={InputUsername}
                        
                        hintText="UserName"
                        floatingLabelText="UserName"
                        />
                        <Field 
                        name="password"
                        component={InputPassword}
                        
                        hintText="Password"
                        floatingLabelText="Password"
                        />
                        <Field 
                        name="email"
                        component={InputEmail}
                        
                        hintText="email"
                        floatingLabelText="email"
                        />
                        <Field
                        name="submitButton"
                        component={SubmitButton}
                        hintText="Submit Button"
                        floatingLabelText="Submit Button"
                        />
                       </fieldset>
                       </form>
                )} />
            </div>
            </div>
          )
    }
}
export default FinalForm;