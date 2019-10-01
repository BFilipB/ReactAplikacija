import validators, { validateFirstName, validatelastName, validateUsername, validatePassowrd, validateEmail } from '../../validators';
import LoginForm from '../LoginForm';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';
import { onSubmit } from '../../validators';

class RegisterForm extends Component {
    render(){
        return (
            <div>
            <h1>RegisterForm</h1>
              <Form 
                validate={this.formValidation}
                onSubmit={onSubmit}
                render= { ( { onSubmit, form, submitting, pristine, values, valid }) => (
                  <form onSubmit={onSubmit, LoginForm}>
                        <fieldset>
                        <Field
                        name="firstName"
                        component={this.InputFirstName}
                        hintText="First Name"
                        floatingLabelText="First Name"
                        validate={validateFirstName}
                        />

                       <Field 
                        name="lastName"
                        component={this.InputLastName}
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        validate={validatelastName}
                        />

                       <Field 
                        name="username"
                        component={this.InputUsername}
                        hintText="UserName"
                        floatingLabelText="UserName"
                        validate={validateUsername}
                        />

                        <Field 
                        name="password"
                        component={this.InputPassword}
                        hintText="Password"
                        floatingLabelText="Password"
                        validate={validatePassowrd}
                        />

                        <Field 
                        name="email"
                        component={this.InputEmail}
                        hintText="email"
                        floatingLabelText="email"
                        validate={validateEmail}
                        />

                        <Field
                        name="submitButton"
                        component={this.SubmitButtonRegister}
                        hintText="Submit Button"
                        floatingLabelText="Submit Button"
                        />
                        </fieldset>
                       </form>
                      
                    ) } />  
        
        </div> 
    )
};
}

export default RegisterForm;