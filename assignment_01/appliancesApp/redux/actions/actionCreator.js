/* 
This js file is responsible for creating the 
Javascript objects which will be containing the 
actions that will be used within the application. 

The fetch statement for the API source will be 
written within here. 
*/

import { GET_APPLIANCES, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './Type';
// types must be imported from the Type.js file. 

// the types must be exported when they are created.
export const getAppliances = () => {
  // get applicances is a constant that will return appliances.
    return {
        type: GET_APPLIANCES
    }
}
// a type is is a unique string identifier for each action that is performed in the store

// this function returns the type of action, which will be used for the application

//this constant is used to get the appliances from the API source.
// it's payload "action" is the applicances 
export const fetchDataSuccess = (appliances) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: appliances
    }
}

// error handling for the application below. 
export const fetchDataFailure  = () => {
    return {
        type: FETCH_DATA_FAILURE 
    }
}

export const fetchDataApi = () => {
// this function is exported as fetchDataApi. 
// this function will be used to fetch the data from the API source.
  return(dispatch) => {
/*
Dispatch is passed as a parameter because  it is used to check 
if the action is a function.
*/
    dispatch(getAppliances());
    // get appliance type is dispatched.
    fetch('https://random-data-api.com/api/v2/appliances')
    .then(response => response.json())
    .then(json => {
      const appliances = json;
      dispatch(fetchDataSuccess(appliances));
    })
    // fetch statement fetched, data converted to json, 
    // response is stored in a constant, and then the
    // data success is dispatched.
    .catch(error => {
      dispatch(fetchDataFailure());
    })
    // if there is an error, the error is dispatched.
  }
}