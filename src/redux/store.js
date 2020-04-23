import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

// earlier it was without export, but after adding 'redux-persist' dependancy, we have export this
//const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // starts from here

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};

