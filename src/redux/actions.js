import booksObject from '../books.json';

export const REQUEST_INFO = 'REQUEST_INFO';

export function requestInfo() {
    return dispatch => {
        const array = []
        array.push(booksObject);
        console.log(array);
        dispatch({
            type: REQUEST_INFO,
            arrayInfo: array
        })
    }
}
