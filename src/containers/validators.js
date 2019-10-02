import RegisterForm from  './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import React from 'react';



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


// const errors = {}
//  export const validateFirstName = (values) => {
//     if(values.firstName == ""){
//         errors.firstName = "Name is required";
// }
// }

export const required = v => {
    if(!v || v === ''){
        return 'This field is required';
    }
    return undefined;
}

export const allowedEmails = v =>{
    if (v === validateEmail()) {
        return "email is not valid";
    }
    return undefined;
};

export const validatePasswordLength = (v) => {
          if(v.length<8){
          return "Password has to be atleast 8 charachters";
        }
         return "Password accepted";
};

