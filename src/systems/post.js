import * as types from './../constants/index';

// asynchronous action load data from api of posts
export const getdata = () => {    
    return (dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(json => dispatch({
                type: types.POST + types.LISTALL,
                data: json
            }))
            .catch(err => dispatch(
                {
                    type: types.POST + types.ERROR,
                    error: "Unable to fetch data",
                }));

    }
}