import axios from 'axios';
export const login = (credentials) => {
    return (dispatch, getState) => {
        // make call to endpoint
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`,
         { email: credentials.email, password: credentials.password })
         .then((res) => {
             console.log('res', res);
            dispatch({type: 'LOGIN_SUCCESS'})
         })
         .catch((err) => {
            const error_msg = err.response.data.message;
            dispatch({type: 'LOGIN_ERROR', error_msg})
         })
    }
}