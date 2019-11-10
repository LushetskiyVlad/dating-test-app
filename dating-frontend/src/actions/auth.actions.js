import axios from '../axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';
import * as alertActions from "./alert.actions";

export function authSuccess(user) {
    return {
        type: AUTH_SUCCESS,
        user
    }
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  }
}

function autoLogout(expiresIn) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn * 1000);
    }
}

export function auth(username, password) {
    return async dispatch => {
        const authData = {
            username,
            password
        };

        try {
            const response = await axios.post('users/login', authData);
            const user = response.data;

            localStorage.setItem('token', user.token);
            localStorage.setItem('userId', user.userId);

            dispatch(authSuccess(user));
            // dispatch(autoLogout(data.expiresIn));
        } catch (e) {
            const error = e.response.data.error;
            dispatch(alertActions.error(error ? error : e.message));
        }
    }
}