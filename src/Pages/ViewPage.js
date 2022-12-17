import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resquestData, getData, errorData } from '../Services/Action'


const ViewPage = () => {
    const state = useSelector(state => state);
    const { isLoading, data, error } = state;

    const dispatch = useDispatch();

    const fetchData = (dispatch) => {
        return (dispatch) => {
            dispatch(resquestData());
            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(res => {
                    dispatch(getData(res.data));
                })
                .catch(err => {
                    dispatch(errorData(err.message))
                })
        }
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [])



    return (
        <div>
            <h3>Data Fetching Using Redux Think....</h3>
            {isLoading && <h5>Data is fetching...</h5>}
            {data && data.map((item) => {
                return <section>
                    <h3>{item.title}</h3>
                </section>
            })}
            {error && <h4>{error}</h4>}
        </div>
    )
}

export default ViewPage




