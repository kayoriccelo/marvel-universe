import api from '../../../../services/api'
import * as Types from '../types'
import history from '../../../../history'

export const getListingCharactersAPI = params => {
    let search = params['search'] ? `nameStartsWith=${params['search']}` : ''
    
    return dispatch => {
        return api.get(`/v1/public/characters?${search}&apikey=${localStorage.getItem('key')}`).then(response => {
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
        return api.get(`v1/public/characters/${character}/series?&apikey=${localStorage.getItem('key')}`).then(response => {
            dispatch({ type: Types.LISTING_SERIES, payload: response.data.data.results})

            return response.data.data.results
        })
    }
}

export const loadCharacter = params => {
    return dispatch => {
        return api.get(`/v1/public/characters/${params['id']}?&apikey=${localStorage.getItem('key')}`).then(response => {
            let character = response.data.data.results[0]

            dispatch([{ type: Types.LOAD_CHARACTER, payload: character }, getListingSeries(character.id)])
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