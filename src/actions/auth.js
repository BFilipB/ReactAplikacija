
import * as actionTypes from './types'
import con from  '../apis'
import {django_client_id, django_client_secret} from '../apis'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export  const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export  const authFail = error  => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return { 
        type: actionTypes.AUTH_LOGOUT
    };

}


export const checkAuthTimeout = expirationTime=> {
    return dispatch => {
        setTimeout(() => {
           dispatch(logout());
        }, expirationTime * 1000)
    }
}


export const authLogin = (credentials) => dispatch =>{
    
        dispatch(authStart());
        const bodyFormData = new FormData();
        bodyFormData.set("username", credentials.username);
        bodyFormData.set("password", credentials.password);
        bodyFormData.set("client_id", django_client_id);
        bodyFormData.set("client_secret", django_client_secret);
        bodyFormData.set("grant_type", "password");
        const response = con.post(
        'http://127.0.0.1:8000/auth/token', 
            bodyFormData
        )
        .then(res => {
           const token = res.data.key;
           const expirationDate = new Date(new Date().getTime() + 3600 * 100);
           localStorage.setItem('token', token);
           localStorage.setItem('expirationDate', expirationDate);
           dispatch(authSuccess(token));
           dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }

export const authSignUp = (credentials) => dispatch  => {
        dispatch(authStart());
        const response =  con.post(
            'http://127.0.0.1:8000/api/users',
            credentials
       
       
        )
        .then(res => {
           const token = res.data.key;
           const expirationDate = new Date(new Date().getTime() + 3600 * 100);
           localStorage.setItem('token', token);
           localStorage.setItem('expirationDate', expirationDate);
           dispatch(authSuccess(token));
           dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        }
        else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
         if( expirationDate <= new Date()) {
             dispatch(logout());
        }
        else {
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout ( expirationDate.getTime() - new Date.getTime() / 1000 ) )
        }   

        }
    }
}