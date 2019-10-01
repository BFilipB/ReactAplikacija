import RegisterForm from  './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import React from 'react';


     

var errors = {};
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
    if(values == ""){
        errors = "Name is required";
        
     }
     return errors;
  
 }

 export const validatelastName = (values) => {
     if(values == ""){
        errors.lastName = "Last name is required";
     }
      return errors;
 }

export const validateEmail = (values) => {
     if(values != validEmailRegex){
         errors = "Invalid email";
     }
      return errors;
 }

 export const validatePassowrd = (values) => {
    if(values == ""){
        errors = " Password is required";
    }
    if(values){
        if(values.length < 8){
            errors = "Smaller than 8 ";
        }
    }
     return errors;
 }

 export const validateUsername = (values) => {
     if(values == ""){
         errors  = "Username is required";
     }
    return errors;
}


