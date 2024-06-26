import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const Middleware = [logger, thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...Middleware)));
export default store;