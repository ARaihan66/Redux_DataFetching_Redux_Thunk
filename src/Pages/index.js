import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestData, getData, errorData } from '../Services/Action';

const ViewPage = () => {
    const state = useSelector((state) => state);

    const { isLoading, data, error } = state;
    const dispatch = useDispatch();

    const fetchData = () => {
        return (dispatch) => {
            dispatch(requestData())
            fetch.get('https://jsonplaceholder.typicode.com/todos')
                .then((res) => {
                    data = res.json();
                    dispatch(getData(data));
                })
                .catch((err) => {
                    dispatch(errorData("Fetching data is failed...."));
                })
        }

    }

    const handleClick = () => {
        dispatch(fetchData)
    }
    return (
        <div>
            <button onClick={handleClick}>GET DATA</button>
            {console.log(data)}
        </div>
    )
}

export default ViewPage
