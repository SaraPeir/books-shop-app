import { REQUEST_INFO, requestInfo, MAP_INFO, mapInfo, BUILD_PURCHASE_ARRAY, buildPurchaseArray } from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import booksObject from '../books.json';
import React from 'react';
import Card from '../js/Card/Card.js';

jest.mock('../index.js', () => "root");



describe('requestInfo', () => {
    it('should create an action to create a book array list', () => {
        const array = [];
        array.push(booksObject);
        const expectedAction = {
            type: REQUEST_INFO,
            arrayInfo: array
          }
          expect(requestInfo()).toEqual(expectedAction)
    });
});

describe('mapInfo', () => {
    it('should not map all arrays books when arrayProp is an empty array', () => {
        const arrayProp = [];
        const expectedAction = {
            type: MAP_INFO,
            payload: {ficcionArray: 'ERROR TO LOAD', noFiccionArray: 'ERROR TO LOAD'}
          }
          expect(mapInfo(arrayProp)).toEqual(expectedAction)
    });
    it('should  map only noFiccion books when ficcion array is an empty array', () => {
        const arrayProp = [{
            ficcion: [],
            noFiccion: [
                {
                    author: "Leticia Dolera",
                    title: "Morder la manzana"
                },
                {
                    author: "Rut Nieves",
                    title: "Cree en ti"
                }
            ]
            }];
        const expectedAction = {
            type: MAP_INFO,
            payload: {
                ficcionArray: 'ERROR TO LOAD', 
                noFiccionArray: [
                    <Card key={0} index={0} kind="noFiccion" author="Leticia Dolera" title="Morder la manzana" />,
                    <Card key={1} index={1} kind="noFiccion" author="Rut Nieves" title="Cree en ti" />
                ] 
            }
          }
          expect(mapInfo(arrayProp)).toEqual(expectedAction)
    });
    it('should  map only ficcion books when noFiccion array is an empty array', () => {
        const arrayProp = [{
            ficcion: [
                {
                    author: "María Dueñas",
                    title: "Las hijas del Capitán"
                },
                {
                    author: "Fernando Aramburu",
                    title: "Patria"
                }
            ],
            noFiccion: []
            }];
        const expectedAction = {
            type: MAP_INFO,
            payload: { 
                ficcionArray: [
                    <Card key={0} index={0} kind="ficcion" author="María Dueñas" title="Las hijas del Capitán" />,
                    <Card key={1} index={1} kind="ficcion" author="Fernando Aramburu" title="Patria" />
                ],
                noFiccionArray: 'ERROR TO LOAD' 
            }
                
          }
          expect(mapInfo(arrayProp)).toEqual(expectedAction)
    });
});

// caso donde se usan middlewares (en este caso solo THUNK)
describe('buildPurchaseArray', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    it('should create an action...', () => {

        const purchaseArray = [
            {title: "El silencio de la ciudad blanca", author: "Eva García Sáenz de Urturi"},
            {title: "El rey recibe", author: "Eduardo Mendoza"},
            {title: "El naufragio", author: "Lola García"}
        ];

        const getSingleBook = {title: "El amor de tu vida", author: "Rut Nieves"};

        purchaseArray.push(getSingleBook)

        const store = mockStore({ arrayBooks: [] });

        const expectedActions = [
            { 
                type: BUILD_PURCHASE_ARRAY, 
                payload: purchaseArray
            }
          ]

        return store.dispatch(buildPurchaseArray(5, true, 'noFiccion')).then(() => {
            expect(buildPurchaseArray(5, true, 'noFiccion')).toEqual(expectedActions)
          });
    });

    // it('should create an action...', () => {

    //     // const booksArray = [{
    //     //     ficcion: [
    //     //         {
    //     //             author: "María Dueñas",
    //     //             title: "Las hijas del Capitán"
    //     //         },
    //     //         {
    //     //             author: "Fernando Aramburu",
    //     //             title: "Patria"
    //     //         }
    //     //     ],
    //     //     noFiccion: [
    //     //         {
    //     //             author: "Leticia Dolera",
    //     //             title: "Morder la manzana"
    //     //         },
    //     //         {
    //     //             author: "Rut Nieves",
    //     //             title: "Cree en ti"
    //     //         }
    //     //     ]
    //     //     }];

    //     const purchaseArray = [
    //         {title: "El silencio de la ciudad blanca", author: "Eva García Sáenz de Urturi"},
    //         {title: "El rey recibe", author: "Eduardo Mendoza"},
    //         {title: "El naufragio", author: "Lola García"}
    //     ];

    //     // const booksArray2 = booksArray[0][kind];
    //     // const getSingleBook = booksArray2[index];

    //     // kind = noFiccion
    //     // index = 5

    //     const getSingleBook = {title: "El amor de tu vida", author: "Rut Nieves"};

    //     purchaseArray.push(getSingleBook)
    //     // const filtered = purchaseArray.filter(book => book.title !== getSingleBook.title);
    //     // const array = toggle ? purchaseArray : filtered;

    //     const store = mockStore({ arrayBooks: [] });

    //     const expectedActions = [
    //         { 
    //             type: BUILD_PURCHASE_ARRAY, 
    //             payload: purchaseArray
    //         }
    //       ]

    //     return store.dispatch(buildPurchaseArray(5, true, 'noFiccion')).then(() => {
    //         // return of async actions
    //         expect(buildPurchaseArray(5, true, 'noFiccion')).toEqual(expectedActions)
    //       });
    // });
});

