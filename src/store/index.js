import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import reducers from './reducers'
import history from '../history'

const middleware = routerMiddleware(history)

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(middleware, multi, thunk, promise)))

export default store