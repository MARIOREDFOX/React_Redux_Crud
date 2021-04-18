import axios from 'axios';
import History from '../history.js';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_FEATURE,
    FETCH_TASKS
} from './types';

const ROOT_URL = 'https://stage.api.sloovi.com';

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/login`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });

                // localStorage.setItem('token', response.data.token);
                var obj = response.data
                var myJson = JSON.stringify(obj.results.token)
                localStorage.setItem('token', myJson);
                History.push('/');

            }).catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    };
};


// export const signupUser = ({ email, password }) => {
//     return (dispatch) => {
//         // submit email/password to the server
//         axios.post(`${ROOT_URL}/signup`, { email, password })
//             .then(response => {
//                 dispatch({ type: AUTH_USER });
//                 localStorage.setItem('token', response.data.token);
//                 History.push('/feature');
//             })
//             .catch(err => {
//                 dispatch(authError(err.response.data.error));
//             });
//     };
// };

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token')
    return { type: UNAUTH_USER };
};

export const fetchFeature = () => {
    return (dispatch) => {
        // debugger
        var token1 = localStorage.getItem('token')
        var objec = JSON.parse(token1)
        axios.get(`${ROOT_URL}/user`, {            
            headers : {
                'Authorization': 'Bearer ' + objec,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
        })
            .then(response => {
                var obj = response.data
                var myJson = JSON.stringify(obj.results)
                var objects = JSON.parse(myJson)
                console.log(">>>>><<<<<<",myJson)
                dispatch({
                    type: FETCH_FEATURE,
                    payload: objects
                });
            });
    };
};

export const fetchTasks = () => {
    return (dispatch) => {
        // debugger
        var token1 = localStorage.getItem('token')
        var objec = JSON.parse(token1)
        axios.get(`${ROOT_URL}/task/lead_04412ba1d622466cab1f0ad941fcf303`, {            
            headers : {
                'Authorization': 'Bearer ' + objec,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
        })
            .then(response => {
                var obj = response.data
                var myJson = JSON.stringify(obj.results)
                var objects = JSON.parse(myJson)
                console.log(">>>>><<<<<<",myJson)
                dispatch({
                    type: FETCH_TASKS,
                    payload: objects
                });
            });
    };
};