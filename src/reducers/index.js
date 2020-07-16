import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import header from './header';

var RootReducer =  combineReducers({
    login,
    post,
    header,
});

export default RootReducer;