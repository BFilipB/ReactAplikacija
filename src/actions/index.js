import { message } from 'antd'
import con from '../apis'
import history from '../history'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    MODAL_SHOW,
    MODAL_HIDE,
} from './types'
import {django_client_id, django_client_secret} from '../apis'
import{ googleLogoutAction} from './googleAuthActions'

//----------------
//Actions Login
//----------------

export const LoginStart = (credentials) => async dispatch =>{
    dispatch({ type: LOGIN_REQUEST});
    const bodyFormData = new FormData();
    bodyFormData.set("username", credentials.username);
    bodyFormData.set("password", credentials.password);
    bodyFormData.set("client_id", django_client_id);
    bodyFormData.set("client_secret", django_client_secret);
    bodyFormData.set("grant_type", "password");
    const response = await con.post(
        '/auth/token',
        bodyFormData
    ).then(res =>{
        dispatch(LoginSuccess(res.data));
    })
    .catch(err => { 
        dispatch(LoginFail("Login failed. "+err));
    })
}

export const LoginSuccess = (token) => async dispatch => {
    message.success("Login successful!", 1);
    
    localStorage.setItem("django_access_token_conv", token.access_token);
    localStorage.setItem("django_refresh_token_conv", token.refresh_token);
    let expiryDate = Math.round(new Date().getTime() / 1000) + token.expires_in;
    localStorage.setItem("django_access_token_expires_in", expiryDate);
    dispatch({ type: LOGIN_SUCCESS, payload: token});
    dispatch(FetchUserStart(token));
    
}

export const LoginFail = (err_msg) => {
    message.error("Login failed. Please try again.", 2);
    return { type: LOGIN_FAILURE, payload: {err_msg:err_msg}}
}

export const FetchUserStart = (token) => async dispatch =>{
    dispatch({ type: GET_USER_REQUEST});
    const header = `${token.token_type} ${token.access_token}`;
    con.get(
        '/api/users/', 
        {
            headers: {
                Authorization: header,
              }
        }
    ).then(response=>{
            const send  = {data: response.data, token: token}
            dispatch(FetchUserSuccess(send));
        }
    )
    .catch(err => { 
        dispatch(FetchUserFail("Fetch user failed. Please try to login manually. " + err));
    })
}

export const FetchUserSuccess = (user_info) => async dispatch => {
    //message.success("Fetch user successful!", 1);
    dispatch({ type: GET_USER_SUCCESS, payload: user_info});
    history.push('/');
}

export const FetchUserFail = (err_msg) => {
    return { type: GET_USER_FAILURE, payload: {err_msg:err_msg}}
}

//Actions registration
export const RegistrationStart = (credentials) => async dispatch =>{
    dispatch({ type: REGISTRATION_REQUEST});
    const response = await con.post(
        '/api/users/',
        credentials
    ).catch(err => { 
        console.warn(err);
        dispatch(RegistrationFail(err));
    }).then(response =>{
        dispatch(RegistrationSuccess(response.data));
        dispatch(LoginStart(credentials));
    })
    //console.log(response);
    //dispatch({})
    history.push('/');
}

export const RegistrationSuccess = (user_info) => async dispatch => {
    message.success("Registration successful! Visit your profile page to edit your information.", 3);
    dispatch({ type: REGISTRATION_SUCCESS, payload: user_info});
}

export const RegistrationFail = (err_msg) => {
    err_msg = "Registration failed. Please try again. " + err_msg
    return { type: REGISTRATION_FAILURE, payload: {err_msg:err_msg}}
}

export const LogoutStart = (token, type) => async dispatch => {
    dispatch({ type: LOGOUT_REQUEST});
    localStorage.removeItem("goog_avatar_url");
    localStorage.removeItem("goog_name");
    localStorage.removeItem("goog_email");

    const header = `${type} ${token}`;
    const bodyFormData = new FormData();
    bodyFormData.set("client_id", django_client_id);
    await con.post(
        '/auth/invalidate-sessions', bodyFormData,
        {
            headers: {  Authorization: header,"Content-Type": "multipart/form-data"}
        }
    ).catch(err => { 
        message.warning("Logout failed",err);
        dispatch(LogoutFail(err));
    }).then(response=>{
        message.success("Logout successful.");
        dispatch(LogoutSuccess());
    })
        //history.push('/');
}

export const LogoutSuccess = () => async dispatch => {
    dispatch({ type: LOGOUT_SUCCESS});
    localStorage.removeItem("django_access_token_conv");
    localStorage.removeItem("django_refresh_token_conv");
    localStorage.removeItem("django_access_token_expires_in");
    console.log("Local storage logout",localStorage);
    dispatch(googleLogoutAction());
}

export const LogoutFail = (err_msg) => {
    err_msg = "Logout failed. Please try again." + err_msg;
    return { type: LOGOUT_FAILURE, payload: {err_msg:err_msg}}
}

//Modal action
export const ShowModal = (data) => {
    console.log(data);
    return { type: MODAL_SHOW, payload: data}
}

export const HideModal = (data) => {
    return { type: MODAL_HIDE, payload: data}
}