import * as types from './../constants/index';
import *  as loginfunctions from './../systems/login';

const initialState = {
    status: sessionStorage.getItem('islogin') === '1' ? true : false,
    username: '',
    password: '',
    error: '',
};

var Reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN + types.SUBMIT:
            let error = loginfunctions.validatelogin({
                username: state.username,
                password: state.password
            });
            if (error !== '') {
                state.status = false;
                state.error = error;
            } else {
                state.status = true;
                state.error = '';
            }
            sessionStorage.setItem('islogin','1');
            return { ...state };
        case types.LOGIN + types.CHANGE:
            state[action.event.target.name] = action.event.target.value;
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;