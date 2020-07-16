import * as types from '../constants/index';
import * as bases from '../systems/base';


const initialState = {
    showform: false,
    id: '',
    title: '',
    body: '',
    sort: types.SORTBY.AZ,
    error: '',
    posts: [],
};

var Reducers = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.POST + types.LISTALL:
            state = {
                showform: false,
                id: '',
                title: '',
                body: '',
                sort: types.SORTBY.AZ,
                error: '',
                posts: [],
            };
            state.posts = action.data;
            state.posts = state.posts.sort(function (a, b) {
                var nameA = a.title.toUpperCase();
                var nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            return { ...state };

        case types.POST + types.SORTBY.AZ:
            state.posts = state.posts.sort(function (a, b) {
                var nameA = a.title.toUpperCase();
                var nameB = b.title.toUpperCase();
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
        case types.POST + types.SORTBY.ZA:
            console.log('dasd');
            state.posts = state.posts.sort(function (a, b) {
                var nameA = a.title.toUpperCase();
                var nameB = b.title.toUpperCase();
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
        case types.POST + types.CHANGE:
            state[action.event.target.name] = action.event.target.value;
            return { ...state };
        case types.POST + types.ADD:
            state.showform = true;
            return { ...state };
        case types.POST + types.EDIT:
            index = bases.findIndex(action.id, state.posts);
            state.id = state.posts[index].id;
            state.title = state.posts[index].title;
            state.body = state.posts[index].body;
            state.showform = true;
            return { ...state };
        case types.POST + types.CANCEL:
            state.showform = false;
            state.id = '';
            state.title = '';
            state.body = '';
            state.error = '';
            return { ...state };
        case types.POST + types.SUBMIT:
            if (state.title === '' || state.body === '') {
                state.error = 'Please input value for fields!';
            } else {
                if (state.id === '') {
                    let newitem = {
                        id: bases.UniqueId(),
                        title: state.title,
                        body: state.body,
                    };
                    state.posts.push(newitem);
                } else {
                    let index = bases.findIndex(state.id, state.posts);
                    state.posts[index].title = state.title;
                    state.posts[index].body = state.body;
                }
                state.showform = false;
                state.id = '';
                state.title = '';
                state.body = '';
                state.error = '';
            }
            return { ...state };
        case types.POST + types.DELETE:
            index = bases.findIndex(action.id, state.posts);
            state.posts.splice(index, 1);
            return { ...state };
        default: return { ...state };
    }
}

export default Reducers;