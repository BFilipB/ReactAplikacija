import RegisterForm from  './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import React from 'react';

export const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
}
     

const errors = {};
const validEmailRegex = 
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
  
// export const formValidation = (values) => {
    
//   if(!values.firstName){
//      errors.firstName = "Name is required";
//   }
  
//   if(!values.lastName){
//      errors.lastName = "Name is required";
//   }
  
//   if(!values.email){
//      errors.email = "Email is required";
//   }
  
//   if(!values.password){
//      errors.password = "Password is required";
//   }

//   if(!values.password.length < 8) {
//       errors.password = "Password must be 8 characters long.";
//   }

//   if(!values.username){
//      errors.username = "Username is required";
//   }

//   if(!values.email == validEmailRegex){
//       errors.email = "Invalid email address";
//   }
//   if(values){
//       return <LoginForm/>
//   }
//     return errors;
// };


export const validateFirstName = (values) => {
    if(values.firstName == ""){
        errors.firstName = "Name is required";
     }
     return errors;
}

export const validatelastName = (values) => {
    if(values.lastName == ""){
        errors.lastName = "Last name is required";
     }
     return errors;
}

export const validateEmail = (values) => {
    if(!values.validateEmail == validEmailRegex){
        errors.firstName = "Invalid email";
     }
     return errors;
}

export const validatePassowrd = (values) => {
    if(values.password == ""){
        errors.password = " Password is required";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be 8 charachters long";
    }
    return errors;
}

export const validateUsername = (values) => {
    if(values.username == ""){
        errors.username = "Username is required";
    }
    return errors;

}

