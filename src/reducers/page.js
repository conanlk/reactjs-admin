import * as types from './../constants/index';
import * as bases from './../systems/base';


const initialState = {
    showform: false,
    id: '',
    title: '',
    body: '',
    error: '',
    pages: [],
};

var Reducers = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.PAGE + types.LISTALL:
            state.pages = action.data;
            return { ...state };
        case types.PAGE + types.CHANGE:
            console.log(action.event.target.name);
            state[action.event.target.name] = action.event.target.value;
            return { ...state };
        case types.PAGE + types.ADD:
            state.showform = true;
            return { ...state };
        case types.PAGE + types.EDIT:
            index = bases.findIndex(action.id, state.pages);
            state.id = state.pages[index].id;
            state.title = state.pages[index].title;
            state.body = state.pages[index].body;
            state.showform = true;
            return { ...state };
        case types.PAGE + types.CANCEL:
            state.showform = false;
            state.id = '';
            state.title = '';
            state.body = '';
            state.error = '';
            return { ...state };
        case types.PAGE + types.SUBMIT:
            if (state.id === '') {
                let newitem = {
                    id: state.id,
                    title: state.title,
                    body: state.body,
                };
                state.pages.push(newitem);
            } else {
                let index = bases.findIndex(state.id, state.pages);
                state.pages[index].title = state.title;
                state.pages[index].body = state.body;
            }
            state.showform = false;
            state.id = '';
            state.title = '';
            state.body = '';
            state.error = '';
            return { ...state };
        case types.PAGE + types.DELETE:            
            index = bases.findIndex(action.id, state.pages);
            state.pages.splice(index, 1);
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;