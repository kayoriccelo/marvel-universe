import configureMockStore from 'redux-mock-store'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import nock from 'nock'
import { fetchCharacterData, fetchListCharactersData, fetchListSeriesData } from './mock'

import * as Actions from '../src/applications/Character/store/actions'


const middlewares = [multi, thunk, promise]
const mockStore = configureMockStore(middlewares)


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


        return store.dispatch(Actions.loadCharacter({ id: 1017100 }))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            })
    })

    it('Testing load of series with id_character of API', () => {

        nock('https://gateway.marvel.com:443')
            .get('/v1/public/characters/1017100/series?apikey=b4d501dcee9bef6f801ce9b6e3de32a3')
            .reply(200, fetchListSeriesData)


        return store.dispatch(Actions.getListingSeries(1017100))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            })
    })

})