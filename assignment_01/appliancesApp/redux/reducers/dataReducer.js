/*
Reducers are created in order to 
change the state of the applciation. 

This file will contain the reducer for 
the data.
*/
import {
  GET_APPLIANCES,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/Type';
// types must be imported in order to be used, within this reducer file.

const initialState = {
  data: [],
  // data is an array that will store data coming from API.
  isLoading: false,
  //boolean to see if the data is loading.
  error: false,
  // boolean to see if there is an error.
};
// this constant sets the initial state of the data coming from the API.

// JS es6 spread operator, and switch statements written below.
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPLIANCES:
      return {
        ...state,
        // spread operator to copy the state.
        isLoading: true,
        // is loading is set to true as this is fetching the API and is loading.
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        // spread operator to copy the state.
        isLoading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
      // state returned if there is no action.
  }
};

export default dataReducer;
// export the reducer to be used in the store.
