import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){
        case(actionTypes.STORE_RESULT): return updateObject(state, {results: state.results.concat({value: action.value,id: createUUID()})});   //.push would mutate the original array.
        case(actionTypes.DELETE_RESULT): return deleteResult(state, action);                
    }

    return state;

}

const deleteResult = (state, action) => {
    //const id=2;
    //this is ok because we're not mutating the items in the array, just removing a pointer.
    // const newArray = [...state.results];
    // newArray.splice(id, 1)

    //filter creates a new array.
    const updatedArray = state.results.filter((result, index) => result.id !== action.resultId);
    return updateObject(state, {results: updatedArray})  
}

const createUUID = () => {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export default resultReducer;