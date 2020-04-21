import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

// earlier it was without export, but after adding 'redux-persist' dependancy, we have export this
//const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // starts from here

export const persistor = persistStore(store);

export default {store, persistor};

