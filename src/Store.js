import { createStore } from 'redux'
import { reducer } from './Services/Reducer';


const store = createStore(reducer);

export default store;