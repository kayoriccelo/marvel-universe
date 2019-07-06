import * as Types from '../types'

const initialState = {
    itens: [],
    series: [],
    instance: {
        id: null,
        name: null,
        description: null,
        thumbnail: {
            path: ''
        }
    }
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.LISTING_CHARACTERS:
            return { ...state, itens: action.payload || state.itens }

        case Types.LOAD_CHARACTER:
            return { ...state, instance: action.payload }

        case Types.UPDATE_CHARACTER:
            return { ...state, character: action.payload }

        case Types.LISTING_SERIES:
            return { ...state, series: action.payload }

        default:
            return state
    }
}
