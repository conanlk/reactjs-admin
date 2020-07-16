import * as types from '../constants/index';

const initialState = {
    component: types.DASHBOARD,
};

var Reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.DASHBOARD + types.CHANGE:
            state.component =  action.component;
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;