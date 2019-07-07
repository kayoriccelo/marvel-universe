import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import fetch from 'isomorphic-fetch'
import { fetchCharacterData, fetchListCharactersData, fetchListSeriesData } from './mock'

import * as Actions from '../src/applications/Character/store/actions'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// const successListCharacters = (characters) => ({
//     type: 'LISTING_CHARACTERS',
//     payload: characters
// })

// const successCharacter = (character) => ({
//     type: 'LOAD_CHARACTER',
//     payload: character
// })

// const successListSeries = (series) => ({
//     type: 'LISTING_SERIES',
//     payload: series
// })

// const fetchListCharacters = () => (dispatch) => {
//     return fetch('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=a-bomb&apikey=b4d501dcee9bef6f801ce9b6e3de32a3')
//         .then(response => {
//             return response.json()
//         })
//         .then(json => {
//             dispatch(successListCharacters(json));
//         })
// }

// const fetchCharacter = (id) => (dispatch) => {
//     return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=b4d501dcee9bef6f801ce9b6e3de32a3`)
//         .then(response => {
//             return response.json()
//         })
//         .then(json => {
//             dispatch(successCharacter(json));
//         })
// }

// const fetchListSeries = (id) => (dispatch) => {
//     return fetch(`https://gateway.marvel.com/v1/public/characters/${id}/series?&apikey=b4d501dcee9bef6f801ce9b6e3de32a3`)
//         .then(response => {
//             return response.json()
//         })
//         .then(json => {
//             dispatch(successListSeries(json));
//         })
// }

describe('async actions', () => {

    let store

    beforeEach(() => {
        store = mockStore({});
    })

    afterEach(() => {
        nock.cleanAll();
    })

    it('Testing load of characters with search of API', () => {

        nock('https://gateway.marvel.com:443')
            .get('/v1/public/characters?nameStartsWith=a-bomb&apikey=b4d501dcee9bef6f801ce9b6e3de32a3')
            .reply(200, fetchListCharactersData)


        return store.dispatch(Actions.getListingCharactersAPI({ search: 'a-bomb', apikey: 'b4d501dcee9bef6f801ce9b6e3de32a3' }))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            })
    })

    it('Testing loading of character with id in API', () => {

        nock('https://gateway.marvel.com:443')
            .get('/v1/public/characters/1017100?apikey=b4d501dcee9bef6f801ce9b6e3de32a3')
            .reply(200, fetchCharacterData)


        return store.dispatch(Actions.loadCharacter({ id: 1017100, apikey: 'b4d501dcee9bef6f801ce9b6e3de32a3' }))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            })
    })

    it('Testing load of series with id_character of API', () => {

        nock('https://gateway.marvel.com:443')
            .get('/v1/public/characters/1017100/series?&apikey=b4d501dcee9bef6f801ce9b6e3de32a3')
            .reply(200, fetchListSeriesData)


        return store.dispatch(Actions.getListingSeries(1017100))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            })
    })

})