import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import user from './user';
import header from './header';

var RootReducer =  combineReducers({
    login,
    header,
    post,
    user,
});

export default RootReducer;