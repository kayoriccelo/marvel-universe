import api from '../../../../services/api'
import * as Types from '../types'
import history from '../../../../history'


export const getListingCharactersAPI = params => {
    let search = params['search'] ? `?nameStartsWith=${params['search']}` : ''

    return dispatch => {
        return api.get(`/v1/public/characters${search}`).then(response => {
            dispatch({ type: Types.LISTING_CHARACTERS, payload: response.data.data.results })

            return response.data.results
        })
    }
}

export const getListingCharacters = _ => {
    return dispatch => dispatch({ type: Types.LISTING_CHARACTERS })
}

export const getListingSeries = character => {
    return dispatch => {
        return api.get(`/v1/public/characters/${character}/series`).then(response => {
            let series = response.data.data ? response.data.data.results : response.data

            dispatch({ type: Types.LISTING_SERIES, payload: series })

            return series
        })
    }
}

export const clearSeries = _ => {
    return dispatch => {
        dispatch({ type: Types.LISTING_SERIES, payload: [] })
    }
}

export const loadCharacter = params => {
    return dispatch => {
        return api.get(`/v1/public/characters/${params['id']}`).then(response => {
            if (response.data.data !== undefined) {
                let character = response.data.data.results[0]
                dispatch([{ type: Types.LOAD_CHARACTER, payload: character }, getListingSeries(character.id)])
            } else {
                let character = response.data
                dispatch({ type: Types.LOAD_CHARACTER, payload: character })
            }
        })
    }
}

export const updateCharacter = params => {
    return dispatch => {
        let itens = params['itens'].map(item => item.id === params['instance'].id ? params['instance'] : item)

        dispatch([
            { type: Types.UPDATE_CHARACTER, payload: params['instance'] },
            { type: Types.LISTING_CHARACTERS, payload: itens }
        ])

        history.push('/characters/listing')
    }
}