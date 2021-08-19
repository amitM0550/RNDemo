import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(...middleWare);

const enhancers = composeEnhancers(middlewares);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default { store };