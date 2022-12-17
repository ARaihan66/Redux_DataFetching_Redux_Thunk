import { REQUEST_DATA, GET_DATA, ERROR_DATA } from './Constant';

export const resquestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}


export const errorData = (err) => {
    return {
        type: ERROR_DATA,
        payload: err
    }
}


