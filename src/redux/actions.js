import booksObject from '../books.json';
import React from 'react';
import Card from '../js/Card/Card.js';
import store from '../index.js';

export const REQUEST_INFO = 'REQUEST_INFO';
export const MAP_INFO = 'MAP_INFO';
export const BUILD_PURCHASE_ARRAY = 'BUILD_PURCHASE_ARRAY';

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
    arrayProp[0].ficcion.map((book, index) => <Card key={index} index={index} kind="ficcion" title={book.title} author={book.author} type={book.type} url={book.urlImg} openModal={this.openModal} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2}  /> ) : 'ERROR TO LOAD';
    
    const noFiccionArray =  arrayProp.length > 0 && arrayProp[0].noFiccion ? 
    arrayProp[0].noFiccion.map((book, index) => <Card key={index} index={index} kind="noFiccion" title={book.title} author={book.author} type={book.type} url={book.urlImg} openModal={this.openModal} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2}  /> ) : 'ERROR TO LOAD';
    
    arrayProp[0].ficcion && console.log(arrayProp[0].ficcion);
    arrayProp[0].noFiccion && console.log(arrayProp[0].noFiccion);
 
    return {
            type: MAP_INFO,
            payload: {ficcionArray, noFiccionArray}
        }
}

export function buildPurchaseArray(index, toggle, kind){
    return dispatch => {
        function getBooksArray(){
            return store.getState().requestedInfo.infoBooks;
        }
        store.subscribe(getBooksArray);
        const booksArray = getBooksArray();
    
        function getPurchaseArray(){
            return store.getState().buildPurchaseArray.arrayBooks;
        }
        store.subscribe(getPurchaseArray);
        const purchaseArray = getPurchaseArray();
    
        const booksArray2 = booksArray[0][kind];
        const getSingleBook = booksArray2[index];
    
        purchaseArray.push(getSingleBook)
        const filtered = purchaseArray.filter(book => book.title !== getSingleBook.title);

        const array = toggle ? purchaseArray : filtered;
        console.log('array', array);
    
        dispatch({
            type: BUILD_PURCHASE_ARRAY,
            payload: array
        }) 
    }
}
