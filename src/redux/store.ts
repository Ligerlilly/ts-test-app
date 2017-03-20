import { createStore, applyMiddleware, compose } from 'redux'
import * as createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootSaga from './sagas'

import rootReducer from './reducers/root_reducer'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
    stateTransformer: (state) => state,
})

const createStoreWithMiddleware = compose(applyMiddleware(routerMiddleware(browserHistory), logger, sagaMiddleware))(createStore)
const store = createStoreWithMiddleware(rootReducer)
sagaMiddleware.run(rootSaga)
export function getStore() { return store }
