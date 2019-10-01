import validators, { validateFirstName, validatelastName, validateUsername, validatePassowrd, validateEmail } from '../../validators';
import LoginForm from '../LoginForm';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';

import { InputPassword, InputUsername, InputLastName, InputFirstName, InputEmail, SubmitButtonRegister} from '../.././../components/InputFields';
import Button from 'react-bootstrap/Button'
import { metaProperty } from '@babel/types';
import { withRouter } from 'react-router-dom';





class RegisterForm extends Component {
    onSubmit(e) {
      e.preventDefault()
      this.props.history.push('/login');
    }
   
    render(){
        return (
            <div>
            <h1>🏁  Register Form</h1>
            <br>
            </br>
            <br></br>
              <Form 
                validate={this.formValidation}
                onSubmit={this.onSubmit.bind(this)}
                render= { ( { onSubmit, valid }) => (
                 
                 <form onSubmit={this.onSubmit.bind(this), LoginForm}>
                        <Field
                        name="firstName"
                        component={InputFirstName}
                        hintText="First Name"
                        floatingLabelText="First Name"
                        validate={validateFirstName}
                        />
                       
                       <Field 
                        name="lastName"
                        component={InputLastName}
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        validate={validatelastName}
                        />

                       <Field 
                        name="username"
                        component={InputUsername}
                        hintText="UserName"
                        floatingLabelText="UserName"
                        validate={validateUsername}
                        secureTextEntry="true"
                        
                       />

                        <Field 
                        name="password"
                        component={InputPassword}
                        hintText="Password"
                        floatingLabelText="Password"
                        validate={validatePassowrd}
                        />

                        <Field 
                        name="email"
                        component={InputEmail}
                        hintText="email"
                        floatingLabelText="email"
                        validate={validateEmail}
                        />
                      
                        <Button size="lg" type="submit">Register</Button>
                       </form>
                 
                    ) } />  
        
        </div> 
    )
};
}

export default RegisterForm;