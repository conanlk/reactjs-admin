import * as types from './../constants/index';

// asynchronous action load data from api of posts
export const getdata = () => {    
    return (dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then(response => response.json())
            .then(json => dispatch({
                type: types.USER + types.LISTALL,
                data: json
            }))
            .catch(err => dispatch(
                {
                    type: types.USER + types.ERROR,
                    error: "Unable to fetch data",
                }));

    }
}