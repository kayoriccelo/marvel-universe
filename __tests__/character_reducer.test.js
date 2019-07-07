import { characterReducer, initialState } from '../src/applications/Character/store/reducers/character'

describe('Character reducer', () => {
    it('should return the initial state', () => {
        expect(characterReducer(undefined, {})).toMatchSnapshot()
    })

    it('should return the itens "LISTING_CHARACTERS"', () => {
        expect(characterReducer(initialState, { type: 'LISTING_CHARACTERS' })).toMatchSnapshot()
    })

    it('should return the instance "LOAD_CHARACTER"', () => {
        expect(characterReducer(initialState, { type: 'LOAD_CHARACTER' })).toMatchSnapshot()
    })

    it('should return the instance updated "UPDATE_CHARACTER"', () => {
        const { instance } = initialState
        expect(characterReducer(initialState, { type: 'UPDATE_CHARACTER', payload: {...instance, name: 'Testing'} })).toMatchSnapshot()
    })

    it('should return the series "LISTING_SERIES"', () => {
        expect(characterReducer(initialState, { type: 'LISTING_SERIES' })).toMatchSnapshot()
    })
})