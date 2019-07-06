import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { characterReducer } from '../applications/Character/store/reducers'


const reducers = combineReducers({
    router: routerReducer,
    character: characterReducer
})

export default reducers
