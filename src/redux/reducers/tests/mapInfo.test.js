import {mapInfo} from '../mapInfo';
jest.mock('../../actions');
jest.mock('../../../index.js', () => "root");

describe('mapInfo', () => {
    const initialState = {
        ficcion: [],
        noFiccion: []
    }
it('should return a new state', () => {
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
        type: 'MAP_INFO',
        payload: obj
      };

    const newState = {
        ficcion: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"}
        ],
        noFiccion: [
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(mapInfo(initialState, action)).toEqual(newState);
  });

  it('should return initial state when action.type is different than MAP_INFO', () => {

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
        type: 'MAP_INFORMATIONS',
        payload: obj
      };

    expect(mapInfo(initialState, action)).toEqual(initialState);
  });

  it('should use initial state as state when state is undefined', () => {
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
        type: 'MAP_INFO',
        payload: obj
      };

    const newState = {
        ficcion: [
            {title: "Patria", author: "Fernando Aramburu"},
            {title: "El silencio de la ciudad blanca", author: "Eva García"}
        ],
        noFiccion: [
            {title: "Haz tus sueños realidad", author: "Rut Nieves"}
        ]
    }

    expect(mapInfo(undefined, action)).toEqual(newState);
  });
});
