import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    withStyles, List, ListItem, Card, CardHeader, Avatar, IconButton,
    Paper, InputBase, ListItemSecondaryAction
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ListIcon from '@material-ui/icons/List'

import { getListingCharactersAPI, setTitle } from './store/actions'


export class Listing extends Component {

    componentWillMount() {
        if (this.props.itens.length === 0) {
            this.props.getListingCharactersAPI({})
        }
    }

    componentWillUnmount() {
        this.props.setTitle('Dashboad')
    }

    renderListItens() {
        const { classes } = this.props

        return (
            this.props.itens.map(item => {
                return (
                    <ListItem>
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
        )
    }

    onSearch = (event) => {
        clearTimeout(this.timer)

        this.setState({ search: event.target.value })

        this.timer = setTimeout(() => {
            this.props.getListingCharactersAPI({ search: this.state.search })
        }, 1000)
    }

    render() {
        this.props.setTitle('Characters')

        const { classes } = this.props

        return (
            <div>
                <div style={{ marginBottom: 15 }}>
                    <Paper className={classes.rootSearch || null}>
                        <SearchIcon className={classes.iconButton || null} />
                        <InputBase
                            className={classes.inputSearch || null}
                            placeholder="Search Characters"
                            inputProps={{ 'aria-label': 'Characters' }}
                            onChange={this.onSearch}
                        />
                    </Paper>
                </div>
                <div style={{ maxHeight: 700, overflow: 'auto' }}>
                    <Paper className={classes.root || null}>
                        <List subheader={<li />} >
                            {this.renderListItens()}
                        </List>
                    </Paper>
                </div>
            </div >
        )
    }
}

export const styles = {
    root: {
        width: '100%',
    },
    rootSearch: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    paper: {
        margin: '10',
        border: '1px bold',
    },
    card: {
        width: '100%',
        backgroundColor: '#f9f9f9'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    inputSearch: {
        width: '100%',
        padding: '2px 4px'
    },
    iconButton: {
        padding: '2px 4px'
    },
    avatar: {
        width: 80,
        height: 80,
    },
    listItemActions: {
        marginRight: 20
    }
}

const mapStateToProps = state => ({ 
    itens: state.character.itens,
    title: state.right.title
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getListingCharactersAPI, setTitle
}, dispatch)

export default (withStyles(styles, { withTheme: true }))(connect(mapStateToProps, mapDispatchToProps)(Listing))