import validators, { required, validatePasswordLength, allowedEmails  } from '../../validators';
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
onSubmbit(e, newPage,values) {
  
  console.log("Vrednosti",values);
  
};

// newPage = (newPage) => {
//   this.props.history.push('/login');
// };

 render(){
  const composeValidators = (...validators) => value => validators.reduce((error, validator) => error ||  validator(value),  undefined);
  
        return (
            <div>
            <h1>🏁  Register Form</h1>
            <br>
            </br>
            <br></br>
              <Form 
                onSubmit={this.onSubmbit}
                render={ ( { handleSubmit}) => (
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