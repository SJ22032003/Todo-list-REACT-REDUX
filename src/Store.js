import rootReducer from "./Context/Reducers";
import {createStore} from 'redux';

const store = createStore(rootReducer);

export default store;