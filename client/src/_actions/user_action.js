import Axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER} from './type';


export function loginUser(dataTosubmit) {

    const request = Axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataTosubmit) {

    const request = Axios.post('/api/users/register', dataTosubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {

    const request = Axios.get('/api/users/auth')
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
export function logoutUser(){
        const request = Axios.get('/api/users/logout')
        .then(response => response.data);
    
        return {
            type: LOGOUT_USER,
            payload: request
        }
    }