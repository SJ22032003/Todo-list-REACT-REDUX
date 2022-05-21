import {combineReducers} from 'redux';
import Reducer from './Reducer';
import changeTheme from './ThemeReducer';

const rootReducer = combineReducers({
    Reducer,
    changeTheme,
})

export default rootReducer;