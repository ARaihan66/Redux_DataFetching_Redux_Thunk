const initialState = {
    isLoading: false,
    data: [],
    error: null

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
            return {
                ...state,
                isLoading: true
            }
        case "GET_DATA":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case "ERROR_DATA":
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}