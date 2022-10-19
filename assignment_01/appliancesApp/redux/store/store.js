/*
This file will contain the 
root reducers, and the data reducer.
representing the state of the application.
*/
import {configureStore, applyMiddleware} from 'redux'
// configureStore is used to create the store.
// applyMiddleware is used to apply the middleware."thunk"
import thunk from 'redux-thunk'
// thunk is the middleware  is imported.
import rootReducer from './reducers'
// root reducer is imported.


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store; 
// export the store to be used in the App.js file.