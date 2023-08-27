import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000
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