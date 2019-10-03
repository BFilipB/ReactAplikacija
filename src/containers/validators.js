import RegisterForm from  './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import React from 'react';



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
    if(!v || v === ' '){
        return 'This field is requireddd';
    }
    return undefined;
}




export const allowedEmails = (v, whatever) =>{
     
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)) {
        return  "invalid email address";
    }
    
}


export const validatePasswordLength = v => {
         if(v){
          if(v.length<8){
          return "Password has to be atleast 8 charachters";
          
        }
         
    }
 };


