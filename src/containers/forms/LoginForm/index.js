import validators, { validateFirstName, validatePassowrd, validateUsername, validateEmail, validatelastName } from '../../validators';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';

import { InputUsername, InputPassword, SubmitButtonLogin } from '../../../components/InputFields';
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {
  onSubmit(e) {
    e.preventDefault()
    this.props.history.push('/login');
  }
    render(){
        return(
          <div>
         <h1>🏁 Login Form</h1>
              <Form 
                validate={this.formValidation}
                onSubmit={this.onSubmit.bind(this)}
                render= { ( { onSubmit, form, submitting, pristine, values, valid }) => (
                  <form onSubmit={this.onSubmit.bind(this)}>
                  
                  <Field 
                    name="username"
                    component={InputUsername}
                    hintText="UserName"
                    floatingLabelText="UserName"
                    // validate={validateFirstName}
                    />

                  <Field 
                        name="password"
                        component={InputPassword}
                        hintText="Password"
                        floatingLabelText="Password"
                        // validate={validatePassowrd}
                  />

                   <Button as="input" type="submit" value="Login" size="lg" />
                  </form>
                  ) } />  
          </div>
        )
    }
}

export default LoginForm;