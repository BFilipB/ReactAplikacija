import validators, { required, validatePasswordLength, allowedEmails } from '../../validators';
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



export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error ||  validator(value),  undefined);
class RegisterForm extends Component {
sleep = ms => new Promise(res => setTimeout(res, ms));

newPage = (newPage) => {
this.props.history.push('/login');
};

onSubmit = async (values, novastrana) => {

await this.sleep(300);
console.log("values", values);
this.newPage(novastrana);
  
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
                render={ ( { handleSubmit, values, submitting, meta }) => (
               <form onSubmit={handleSubmit}>
                       <Field
                        name="firstName"
                        component={InputField}
                        hintText="First Name"
                        floatingLabelText="First Name"
                        validate={required}
                        type="text"
                        />
                       <Field 
                        name="lastName"
                        component={InputField}
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        validate={required} 
                        type="text"
                        />
                       <Field 
                        name="username"
                        component={InputField}
                        hintText="UserName"
                        floatingLabelText="username"
                        validate={required}
                        type="text"
                       />
                       <Field 
                        name="password"
                        component={InputField}
                        hintText="Password"
                        floatingLabelText="Password"
                        validate={composeValidators(required, validatePasswordLength)}
                        type="password"
                        />
                        <Field 
                        name="email"
                        component={InputField}
                        hintText="email"
                        floatingLabelText="Email"
                        validate={composeValidators(required, allowedEmails)}
                        type="email"
                        />
                      
                        <Button size="lg" type="submit">Register</Button>
                       </form>
                 
                    ) } />  
        
        </div> 
    );
   
    
};
}



export default RegisterForm;