import * as Types from '../types'


const initialState = {
    title: null
}

export const rightReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.SET_TITLE_BREADCRUMBS:
            return { ...state, title: action.payload }

        default:
            return state
    }
}
