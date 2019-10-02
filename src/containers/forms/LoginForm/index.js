import validators, { validateFirstName, validatePassowrd, validateUsername, validateEmail, validatelastName } from '../../validators'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';

import {InputPassword, SubmitButtonLogin, InputField } from '../../../components/InputFields';
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {
  onSubbmit(e, test) {
   
    window.alert("hey")
  }
  
  test = () => {
    console.log("heygggg")
  }
    render(){
        return(
          <div>
         <h1>🏁 Login Form</h1>
              <Form 
                onSubmit={this.onSubbmit.bind(this)}
                render= { ( { onSubbmit, form, submitting, pristine, values, valid, e }) => (
                  <form onSubmit={this.onSubbmit.bind(this)}>
                  <Field 
                    name="username"
                    component={InputField}
                    hintText="username"
                    floatingLabelText="username"
                    // validate={validateFirstName}
                    />

                  <Field 
                        name="password"
                        component={InputField}
                        hintText="Password"
                        floatingLabelText="password"
                        type="password"
                        // validate={validatePassowrd}
                  />

                <Button size="lg" type="submit" onClick={this.test}>Login</Button>
                  </form>
                  ) } />  
          </div>
        )
    }
}

export default LoginForm;