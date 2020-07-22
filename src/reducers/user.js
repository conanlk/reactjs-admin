import * as types from '../constants/index';
import * as bases from '../systems/base';


const initialState = {
    showform: false,
    id: '',
    name: '',
    username: '',
    email: '',
    sort: types.SORTBY.AZ,
    error: '',
    users: [],
};

var Reducers = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.USER + types.LISTALL:
            state = {
                showform: false,
                id: '',
                name: '',
                username: '',
                email: '',
                sort: types.SORTBY.AZ,
                error: '',
                users: [],
            };
            console.log(state.users)
            state.users = action.data;
            state.users = state.users.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            return { ...state };

        case types.USER + types.SORTBY.AZ:
            state.users = state.users.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            state.sort = types.SORTBY.AZ;
            return { ...state };
        case types.USER + types.SORTBY.ZA:
            state.users = state.users.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            });
            state.sort = types.SORTBY.ZA;
            return { ...state };
        case types.USER + types.CHANGE:
            state[action.event.target.name] = action.event.target.value;
            return { ...state };
        case types.USER + types.ADD:
            state.showform = true;
            return { ...state };
        case types.USER + types.EDIT:
            index = bases.findIndex(action.id, state.users);
            state.id = state.users[index].id;
            state.name = state.users[index].name;
            state.username = state.users[index].username;
            state.email = state.users[index].email;
            state.showform = true;
            return { ...state };
        case types.USER + types.CANCEL:
            state.showform = false;
            state.id = '';
            state.name = '';
            state.username = '';
            state.email = '';
            state.error = '';
            return { ...state };
        case types.USER + types.SUBMIT:
            if (state.name === '' || state.username === '' || state.email === '') {
                state.error = 'Please input value for fields!';
            } else {
                if (state.id === '') {
                    let newitem = {
                        id: bases.UniqueId(),
                        name: state.name,
                        username: state.username,
                        email: state.email,
                    };
                    state.users.push(newitem);
                } else {
                    let index = bases.findIndex(state.id, state.users);
                    state.users[index].name = state.name;
                    state.users[index].username = state.username;
                    state.users[index].email = state.email;
                }
                state.showform = false;
                state.id = '';
                state.name = '';
                state.username = '';
                state.email = '';
                state.error = '';
            }
            return { ...state };
        case types.USER + types.DELETE:
            index = bases.findIndex(action.id, state.users);
            state.users.splice(index, 1);
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;