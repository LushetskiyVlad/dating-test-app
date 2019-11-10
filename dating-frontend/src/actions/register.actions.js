import axios from '../axios';



export function register(userData) {
    return async dispatch => {
        try {
            const data = await axios.post('/users/create', userData);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
}