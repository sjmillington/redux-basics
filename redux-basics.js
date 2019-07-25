const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer. - takes initialState if state is undefined
const rootReducer = (state = initialState, action) => {

    const newState = {
        ...state
    }

    switch(action.type){
        case('INC_COUNTER'):
            newState.counter++;
            break;
        case('ADD_COUNTER'):
            newState.counter += action.value;
            break;
    }

    return newState;
}

//Store
const store = createStore(rootReducer);


//Subsciption
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//Dispatching Actions
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10});



