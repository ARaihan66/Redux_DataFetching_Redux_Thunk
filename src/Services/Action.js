import axios from 'axios';
import { REQUEST_DATA, GET_DATA, ERROR_DATA } from './Constant';

export const GetAllData = (dispatch) => {
    dispatch({ type: REQUEST_DATA })
    axios('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            dispatch({
                type: GET_DATA,
                payload: res.data
            })
                .catch(err => {
                    dispatch(ERROR_DATA)
                })
        })
}
