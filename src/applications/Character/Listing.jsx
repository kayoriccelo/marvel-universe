import React, { useEffect, useState } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    withStyles, List, ListItem, Card, CardHeader, Avatar, IconButton, Paper, InputBase,
    ListItemSecondaryAction
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ListIcon from '@material-ui/icons/List'

import { getListingCharactersAPI, setTitle } from './store/actions'
import CharacterStyle from './styles'


export const Listing = ({ getListingCharactersAPI, setTitle, itens, classes }) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        itens.length === 0 && getListingCharactersAPI({})        
        setTitle('Characters')

        return () => setTitle('Dashboad')
    })

    const onSearch = (event) => {
        let timer
        clearTimeout(timer)

        setSearch(event.target.value)

        timer = setTimeout(() => {
            getListingCharactersAPI({ search })
        }, 1000)
    }

    const renderListItens = () => itens.map(item => {
        return (
            <ListItem key={`${item.id}`}>
                <Card className={classes.card || null}>
                    <Link to={`/characters/update/${item.id}`}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    aria-label="Recipe"
                                    src={`${item.thumbnail.path}.jpg`}
                                    className={classes.avatar || null} />
                            }
                            title={item.name}
                            subheader={`Series: ${item.series.available}`}
                        />
                    </Link>
                    <ListItemSecondaryAction className={classes.listItemActions || null}>
                        <Link to={`/characters/update/${item.id}/series`}>
                            <IconButton edge="end" aria-label="Delete">
                                <ListIcon />
                            </IconButton>
                        </Link>
                    </ListItemSecondaryAction>
                </Card>
            </ListItem>
        )
    })

    return [
        <div style={{ marginBottom: 15 }}>
            <Paper className={classes.rootSearch || null}>
                <SearchIcon className={classes.iconButton || null} />
                <InputBase
                    className={classes.inputSearch || null}
                    placeholder="Search Characters"
                    inputProps={{ 'aria-label': 'Characters' }}
                    onChange={onSearch}
                />
            </Paper>
        </div>,
        <div style={{ maxHeight: 800, overflow: 'auto' }}>
            <Paper className={classes.root || null}>
                <List subheader={<li />} >
                    {renderListItens()}
                </List>
            </Paper>
        </div>
    ]
}

const mapStateToProps = ({ character, right }) => ({ itens: character.itens, title: right.title })
const mapDispatchToProps = dispatch => bindActionCreators({ getListingCharactersAPI, setTitle }, dispatch)

export default (withStyles(CharacterStyle, { withTheme: true }))(connect(mapStateToProps, mapDispatchToProps)(Listing))