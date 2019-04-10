import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
// import contacts from './Form/reducers/contactReducer';
// import profileReducer from'./Profile/reducer'
import postReducer from './Posts/reducer'
import authReducer from './Main/reducer'
const middleware = applyMiddleware(promise(), thunk, createLogger());



let stuStore = createStore(combineReducers({
    // contacts: contacts,
    // profileReducer,
    postReducer,
    authReducer,

}), {}, middleware);

export default stuStore;