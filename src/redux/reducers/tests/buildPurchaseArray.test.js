import {buildPurchaseArray} from '../buildPurchaseArray';
jest.mock('../../actions');
jest.mock('../../../index.js', () => "root");

describe('buildPurchaseArray', () => {
    const initialState = {
        arrayBooks: []
    }
it('should return a new state', () => {
    const obj = [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
    ]

    const action = {
        type: 'BUILD_PURCHASE_ARRAY',
        payload: obj
      };

      const newState = { 
        arrayBooks: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(buildPurchaseArray(initialState, action)).toEqual(newState);
  });

  it('should return initial state when action.type is different than BUILD_PURCHASE_ARRAY', () => {
 
    const obj = {
        ficcionArray: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"}
        ],
        noFiccionArray: [
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    const action = {
        type: 'BUILD_PURCHASE_NEW_ARRAY',
        payload: obj
      };

    expect(buildPurchaseArray(initialState, action)).toEqual(initialState);
  });

  it('should use initial state as state when state is undefined', () => {
    const obj = [
        {title: "Patria", author: "Fernando Aramburu"},
        {title: "El silencio de la ciudad blanca", author: "Eva García"},
        {title: "Haz tus sueños realidad", author: "Rut Nieves"}
];

    const action = {
        type: 'BUILD_PURCHASE_ARRAY',
        payload: obj
      };

    const newState = { 
        arrayBooks: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(buildPurchaseArray(undefined, action)).toEqual(newState);
  });
});