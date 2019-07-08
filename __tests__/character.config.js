import React from 'react'
import { shallow } from 'enzyme'
import { Listing } from '../src/applications/Character/Listing'
import { Update } from '../src/applications/Character/Update'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'


const mockStore = configureStore()
let [setTitle, getListingCharactersAPI] = new Array(1).fill(jest.fn())

export const initialState = {
    itens: [{
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
        "series": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                    "name": "Avengers: The Initiative (2007 - 2010)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
                    "name": "Deadpool (1997 - 2002)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
                    "name": "Marvel Premiere (1972 - 1981)"
                }
            ],
            "returned": 3
        },
    },
    {
        "id": 1017100,
        "name": "A-Bomb (HAS)",
        "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        "modified": "2013-09-18T15:54:04-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
        "series": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                    "name": "Hulk (2008 - 2012)"
                }
            ],
            "returned": 1
        },
    },
    {
        "id": 1009144,
        "name": "A.I.M.",
        "description": "AIM is a terrorist organization bent on destroying the world.",
        "modified": "2013-10-17T14:41:30-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
        "series": {
            "available": 33,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/series",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13082",
                    "name": "Ant-Man & the Wasp (2010 - 2011)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                    "name": "Avengers (1998 - 2004)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                    "name": "Avengers (1963 - 1996)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
                    "name": "Avengers and Power Pack (2017)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1046",
                    "name": "Avengers and Power Pack Assemble! (2006)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23600",
                    "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (2017)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/227",
                    "name": "Avengers Vol. 2: Red Zone (2003)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/271",
                    "name": "Avengers Vol. II: Red Zone (2003)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
                    "name": "Captain America (1998 - 2002)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
                    "name": "Captain America (1968 - 1996)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23810",
                    "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
                    "name": "Defenders (1972 - 1986)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
                    "name": "Incredible Hulks (2010 - 2011)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/16583",
                    "name": "Indestructible Hulk (2012 - Present)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/16593",
                    "name": "Iron Man (2012 - Present)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
                    "name": "Iron Man (1968 - 1996)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/23915",
                    "name": "Iron Man Epic Collection: Doom (2018)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/9718",
                    "name": "Marvel Adventures Super Heroes (2010 - 2012)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1506",
                    "name": "Marvel Masterworks: Captain America Vol. (2005)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/189",
                    "name": "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)"
                }
            ],
            "returned": 20
        },
    }]
}

const store = mockStore(initialState)

export function shallowListingCharacterSetup() {
    const enzymeWrapper = shallow(
        <Provider store={store}>
            <Listing
                setTitle={setTitle}
                getListingCharactersAPI={getListingCharactersAPI}
            />
        </Provider>
    ).dive()

    return {
        enzymeWrapper
    }
}

export function shallowUpdateCharacterSetup() {
    const enzymeWrapper = shallow(
        <Provider store={store}>
            <Update
                setTitle={setTitle}
                getListingCharactersAPI={getListingCharactersAPI}
            />
        </Provider>
    ).dive()

    return {
        enzymeWrapper
    }
}