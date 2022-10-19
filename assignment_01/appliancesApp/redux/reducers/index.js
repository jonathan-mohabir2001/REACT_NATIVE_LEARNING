/*
This js file will contain the 
root reducers, and the data reducer.
*/
import {combineReducers} from 'react-redux'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer
