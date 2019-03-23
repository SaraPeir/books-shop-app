import { REQUEST_INFO, requestInfo, MAP_INFO, mapInfo, BUILD_PURCHASE_ARRAY, buildPurchaseArray } from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import booksObject from '../books.json';
import React from 'react';
import Card from '../js/Card/Card.js';

jest.mock('../index.js', () => "root");
jest.mock('./actionsUtils');

import actionsUtils from './actionsUtils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
    it('should handle changing a purchase status and fetches all purchases', () => {
        const store = mockStore();
        store.dispatch(buildPurchaseArray(5, true, 'noFiccion'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'BUILD_PURCHASE_ARRAY'})
    });

    it('should ....', () => {
        const booksArray = [{
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

        const purchaseArray = [
            {title: "El silencio de la ciudad blanca", author: "Eva García Sáenz de Urturi"},
            {title: "El rey recibe", author: "Eduardo Mendoza"},
            {title: "El naufragio", author: "Lola García"}
        ];

        const getSingleBook = {title: "El amor de tu vida", author: "Rut Nieves"};

        

        actionsUtils.getAllBooks = jest.fn().mockReturnValue(booksArray);
        actionsUtils.getPurchaseBooks = jest.fn().mockReturnValue(purchaseArray);
        purchaseArray.push(getSingleBook);

        actionsUtils.getFiltered = jest.fn().mockReturnValue(purchaseArray.filter(el => el.title !== getSingleBook.title));

        const store = mockStore();
        store.dispatch(buildPurchaseArray(5, false, 'noFiccion'));
        
        const actions = store.getActions();

        const payloadResult = [
            {title: "El silencio de la ciudad blanca", author: "Eva García Sáenz de Urturi"},
            {title: "El rey recibe", author: "Eduardo Mendoza"},
            {title: "El naufragio", author: "Lola García"}
        ]

        expect(actions[0]).toEqual({type: 'BUILD_PURCHASE_ARRAY', payload: payloadResult})
    });
});

  