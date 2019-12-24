import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './Reducers/rootReducer'
import App from './App'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
