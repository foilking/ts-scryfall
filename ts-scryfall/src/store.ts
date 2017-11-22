import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers';

const devToolsExtension = 'devToolsExtension';
let devtools: any = window[devToolsExtension] ? window[devToolsExtension]() : (f: any) => f;

let middleware = applyMiddleware(reduxThunk);
const store: any = middleware(devtools(createStore))(rootReducer);

export default store;