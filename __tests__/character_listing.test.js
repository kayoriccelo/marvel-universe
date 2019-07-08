import { shallowListingCharacterSetup } from './character.config'
import sinon from 'sinon'

describe('Shallow rendered Character Listing', () => {
    let wrapper

    beforeEach(() => {
        const { enzymeWrapper } = shallowListingCharacterSetup()
        wrapper = enzymeWrapper
    })

    afterEach(() => {})

    it('should render a list characters', () => {

        expect(wrapper).toMatchSnapshot()

    })
})