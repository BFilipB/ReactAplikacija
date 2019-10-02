import RegisterForm from  './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import React from 'react';


var errors = {};
export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
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
}

 export const validatelastName = (values) => {
     if(values.lastName== ""){
        errors= "Last name is required";
     }
      
 }

export const validatePassword = (values) => {
    if(values.Password=""){
        errors.Password = "Password is required";
    }
    if(values.Password){
        if(values.Password.length<8){
          errors.Password = "Password has to be atleast 8 charachters"
        }
    }
}

export const validateUsername = (values) => {
     if(values.username == ""){
         errors.username  = "Username is required";
     }
}

