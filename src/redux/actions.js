import booksObject from '../books.json';
import React from 'react';
import Card from '../js/Card/Card.js';


export const REQUEST_INFO = 'REQUEST_INFO';
export const MAP_INFO = 'MAP_INFO';

export function requestInfo() {
    const array = []
    array.push(booksObject);
    return {
            type: REQUEST_INFO,
            arrayInfo: array
        }
}

export function mapInfo(arrayProp) {
    const ficcionArray =  arrayProp.length > 0 && arrayProp[0].ficcion ? 
    arrayProp[0].ficcion.map((book, index) => <Card key={index} title={book.title} author={book.author} type={book.type} url={book.urlImg} openModal={this.openModal} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2}  /> ) : 'ERROR TO LOAD';
    const noFiccionArray =  arrayProp.length > 0 && arrayProp[0].noFiccion ? 
    arrayProp[0].noFiccion.map((book, index) => <Card key={index} title={book.title} author={book.author} type={book.type} url={book.urlImg} openModal={this.openModal} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2}  /> ) : 'ERROR TO LOAD';
 
    return {
            type: MAP_INFO,
            payload: {ficcionArray, noFiccionArray}
        }
}

// openModal={this.openModal} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2}

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
