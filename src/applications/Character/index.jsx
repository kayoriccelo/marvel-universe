import React from 'react'
import Listing from './Listing'
import Update from './Update'


export const ListingCharacter = () => <Listing />

export const UpdateCharacter = ({ match }) => <Update {...match.params} />
