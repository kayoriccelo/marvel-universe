import { shallowUpdateCharacterSetup } from './character.config'
import sinon from 'sinon'

describe('Shallow rendered Character Update', () => {
    let wrapper

    beforeEach(() => {
        const { enzymeWrapper } = shallowUpdateCharacterSetup()
        wrapper = enzymeWrapper
    })

    afterEach(() => {})

    it('should render a update characters', () => {

        expect(wrapper).toMatchSnapshot()

    })
})