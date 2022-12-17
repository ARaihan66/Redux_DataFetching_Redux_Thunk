import { REQUEST_DATA, GET_DATA, ERROR_DATA } from '../Services/Constant'
const initialState = {
    isLoading: false,
    data: null,
    error: null

}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isLoading: true
            }
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case ERROR_DATA:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}