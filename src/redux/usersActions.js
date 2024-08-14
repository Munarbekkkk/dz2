import axios from 'axios';

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
        } catch (error) {
            console.error(error)
        }
    };
};
export const userFetchData = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
        } catch (error) {
            console.error(error)
        }
    };
};
