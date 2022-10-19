/*
Reducers are created in order to 
change the state of the applciation. 

This file will contain the reducer for 
the data.
*/
import { GET_APPLIANCES, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/Type';
// types must be imported in order to be used, within this reducer file. 

const initialState = {
    data: [],
    // data is an array that will store data coming from API. 
    isLoading: false,
    //boolean to see if the data is loading.
    error: false
    // boolean to see if there is an error.
}
// this constant sets the initial state of the data coming from the API. 



