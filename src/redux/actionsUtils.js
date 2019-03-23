import store from '../index.js';

function getAllBooks(){
    const result = store.getState().requestedInfo.infoBooks;
    store.subscribe(() => result);
    return result;
}

function getPurchaseBooks(){
    const result = store.getState().buildPurchaseArray.arrayBooks;
    store.subscribe(() => result);
    return result;
}

function getFiltered(array, obj){
    return array && array.filter(el => el.title !== obj.title);
}

const actionsUtils = {
    getAllBooks, getPurchaseBooks, getFiltered
}

export default actionsUtils;