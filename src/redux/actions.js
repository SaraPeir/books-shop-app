import booksObject from '../books.json';

export const REQUEST_INFO = 'REQUEST_INFO';

export function requestInfo() {
    const array = []
    array.push(booksObject);
    return {
            type: REQUEST_INFO,
            arrayInfo: array
        }
}

// en caso se quiere aprovechar del uso del thunk
/* export function requestInfo() {
    return dispatch => {
        const array = []
        array.push(booksObject);
        console.log(array);
        console.log(array[0].ficcion[0].title);
        dispatch({
            type: REQUEST_INFO,
            arrayInfo: array
        })
    }
} */
