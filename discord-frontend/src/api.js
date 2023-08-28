import axios from 'axios'
import { logout } from './shared/utils/auth'

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000
})


// it will be executed first before moving further
apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user')

    // a jwt token will be attached to every request going to the server
    if(userDetails){
        const token = JSON.parse(userDetails).token
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (err) => {
    return Promise.reject(err)
})

// login request
// data will hold the details that will be sent to the server
export const login = async (data) => {
    try {
        return await apiClient.post('auth/login', data)
    } catch (exception) {
        return{
            error: true,
            exception,
        }
    }
}

// register request
export const register = async (data) => {
    try {
        return await apiClient.post('auth/register', data)
    } catch (exception) {
        return{
            error: true,
            exception,
        }
    }
}


// secure routes

// to check exceptions occuring in jwt token
const checkResponseCode = (exception) =>{
    const responseCode = exception?.response?.status;

    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout() //define logout in auth.js
    }
}