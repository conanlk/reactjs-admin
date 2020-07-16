import { combineReducers } from 'redux';
import login from './login';
import page from './page';
import header from './header';

var RootReducer =  combineReducers({
    login,
    page,
    header,
});

export default RootReducer;