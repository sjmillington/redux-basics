import { STORE_RESULT, DELETE_RESULT } from './actionsTypes'

export const saveResult = (result) => {
    return{
        type: STORE_RESULT,
        value: result
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
         //simulated database call.
        setTimeout(() => {
            console.log(getState().ctr.counter)
            dispatch(saveResult(result))
        }, 2000)
    }  
}

export const deleteResult = (resultId) => {
    return{
        type: DELETE_RESULT,
        resultId: resultId
    }
}