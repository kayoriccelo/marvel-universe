
describe('Shallow rendered Character Listing', () => {
    it('should render a list characters', () => {
        const { enzymeWrapper, props } = shallowSetup()

        expect(enzymeWrapper.find('li.MuiListItem-root MuiListItem-gutters')).to.have.lengthOf(3)

    })
})