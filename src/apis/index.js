import axios from 'axios';

export const baseUrlHttp = process.env.REACT_APP_BASE_BACKEND_URL;
export const apiUrlHttp = process.env.REACT_APP_API_URL;



export var apiCall = axios.create (
    {
        baseURL: apiUrlHttp
    }
)

export const apiCon = axios.create({
    baseURL: apiUrlHttp,
    timeout: 1000,
})

export default axios.create({
    baseURL: baseUrlHttp
})