import validators, { validateFirstName, validatePassowrd } from '../../validators';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';
import { onSubmit } from '../../validators';

 
class LoginForm extends Component {
    render(){
        return(
          <div>

            <script crossorigin src="..."></script>
              <h1>Login Form</h1>
              <Form 
                validate={this.formValidation}
                onSubmit={onSubmit}
                render= { ( { onSubmit, form, submitting, pristine, values, valid }) => (
                  <form onSubmit={onSubmit}>
                  <fieldset>
                  <Field 
                    name="username"
                    component={this.InputUsername}
                    hintText="UserName"
                    floatingLabelText="UserName"
                    validate={validateFirstName}
                    />

                  <Field 
                        name="password"
                        component={this.InputPassword}
                        hintText="Password"
                        floatingLabelText="Password"
                        validate={validatePassowrd}
                        />
                      <Field
                        name="submitButton"
                        component={this.SubmitButton}
                        hintText="Submit Button"
                        floatingLabelText="Submit Button"
                        />
                    
                  </fieldset>
                  </form>
                  ) } />  
          </div>
        )
    }
}

export default LoginForm;