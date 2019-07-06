import React from 'react'
import Listing from './Listing'
import Update from './Update'

export function ListingCharacter() {
    return <Listing /> 
}

export function UpdateCharacter({ match}) {
    return <Update id={match.params.id}/> 
}