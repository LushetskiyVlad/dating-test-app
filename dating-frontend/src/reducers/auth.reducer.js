import { AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/actionTypes";

const initialState = {
    loggedIn: false,
    user: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        default:
            return state;
    }
}