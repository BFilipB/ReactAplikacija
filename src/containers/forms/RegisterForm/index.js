import validators, { validateFirstName, validatelastName, validateUsername, validatePassowrd, validateEmail, formValidation, validatePassword } from '../../validators';
import LoginForm from '../LoginForm';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';

import { InputPassword, InputEmail, InputUsername, InputFirstName, InputLastName, InputField} from '../.././../components/InputFields';
import Button from 'react-bootstrap/Button'
import { metaProperty } from '@babel/types';
import { withRouter } from 'react-router-dom';


class RegisterForm extends Component {
  onSubmit(e, newPage) {
  e.preventDefault();
    
    
  }
  newPage = (newPage) => {
    
    this.props.history.push('/login');
    };
 
    render(){
        return (
            <div>
            <h1>🏁  Register Form</h1>
            <br>
            </br>
            <br></br>
              <Form 
                onSubmit={this.onSubmit.bind(this)}
                render= { ( { onSubmit, form,  valid, values, input, meta }) => (
               <form onSubmit={this.onSubmit.bind(this)}>
                        <Field
                        name="firstName"
                        component={InputField}
                        hintText="First Name"
                        floatingLabelText="First Name"
                        validate={validateFirstName}
                        
                        
                        
                        />
                      
                       <Field 
                        name="lastName"
                        component={InputField}
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        validate={validatelastName}
                       
                        />
                    
                       <Field 
                        name="username"
                        component={InputField}
                        hintText="UserName"
                        floatingLabelText="UserName"
                        //validate={validateUsername}
                        secureTextEntry="true"
                        
                       />

                        <Field 
                        name="password"
                        component={InputField}
                        hintText="Password"
                        floatingLabelText="Password"
                        //validate={this.validatePassword}
                        />

                        <Field 
                        name="email"
                        component={InputField}
                        hintText="email"
                        floatingLabelText="email"
                        //validate={validateEmail}
                        />
                      
                        <Button size="lg" type="submit" onClick={this.newPage}>Register</Button>
                       </form>
                 
                    ) } />  
        
        </div> 
    )
};
}

export default RegisterForm;