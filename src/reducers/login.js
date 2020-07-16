import * as types from './../constants/index';
import *  as loginfunctions from './../systems/login';

const initialState = {
    status: true,
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
            return { ...state };
        case types.LOGIN + types.CHANGE:
            state[action.event.target.name] = action.event.target.value;
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;