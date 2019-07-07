import configureMockStore from 'redux-mock-store'
import { initialState } from './character.config'

const listingSuccess = (itens) => ({ type: 'LISTING_CHARACTERS', payload: itens })
const updateSuccess = (character) => ({ type: 'UPDATE_CHARACTER', payload: character })

const mockStore = configureMockStore()
const store = mockStore({})

const inicialStateCharacter = {
    ...initialState,
    series: [],
    instance: {}
}

describe('Testing character actions', () => {
    it('Testing of action LISTING_CHARACTERS', () => {
        store.dispatch(listingSuccess(inicialStateCharacter.itens))

        expect(store.getActions()).toMatchSnapshot()

        expect(store.getActions()[0]['payload'].length === 3).toBe(true)
    })

    it('Testing of action UPDATE_CHARACTER', () => {

        store.dispatch(updateSuccess({
            "id": 1011334,
            "name": "Testing Update",
            "description": "",
            "modified": "2014-04-29T14:18:17-0400"
        }))

        expect(store.getActions()[1]['payload'] != undefined).toBe(true)

        expect(store.getActions()).toMatchSnapshot()
    })
})