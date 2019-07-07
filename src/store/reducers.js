import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { rightReducer } from '../components/Containers/store/reducers'
import { characterReducer } from '../applications/Character/store/reducers'


const reducers = combineReducers({
    router: routerReducer,
    right: rightReducer,
    character: characterReducer
})

export default reducers
