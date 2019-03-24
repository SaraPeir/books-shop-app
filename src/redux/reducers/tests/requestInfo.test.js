import {requestInfo} from '../requestInfo';
jest.mock('../../actions');
jest.mock('../../../index.js', () => "root");

describe('requestInfo', () => {
    const initialState = {
        infoBooks: []
    }
it('should return a new state', () => {
    const obj = [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
    ]

    const action = {
        type: 'REQUEST_INFO',
        payload: obj
      };

      const newState = { 
        infoBooks: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(requestInfo(initialState, action)).toEqual(newState);
  });

  it('should return initial state when action.type is different than REQUEST_INFO', () => {
 
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
        type: 'REQUEST_INFO_ARRAY',
        payload: obj
      };

    expect(requestInfo(initialState, action)).toEqual(initialState);
  });

  it('should use initial state as state when state is undefined', () => {
    const obj = [
        {title: "Patria", author: "Fernando Aramburu"},
        {title: "El silencio de la ciudad blanca", author: "Eva García"},
        {title: "Haz tus sueños realidad", author: "Rut Nieves"}
];

    const action = {
        type: 'REQUEST_INFO',
        payload: obj
      };

    const newState = { 
        infoBooks: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"},
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(requestInfo(undefined, action)).toEqual(newState);
  });
});