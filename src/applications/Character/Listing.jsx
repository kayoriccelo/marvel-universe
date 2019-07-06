import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles, List, ListItem, Card, CardHeader, Avatar, IconButton } from '@material-ui/core'

import { getListingCharactersAPI } from './store/actions'


const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    rootSearch: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
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
        width: '100%'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    inputSearch: {
        width: '100%'
    },
    avatar: {
        width: 80,
        height: 80,
    }
}

class Listing extends Component {

    componentWillMount() {
        if (this.props.itens.length === 0) {
            this.props.getListingCharactersAPI({})
        }
    }

    renderListItens() {
        const { classes } = this.props

        return (
            this.props.itens.map(item => {
                return (
                    <Link to={`/characters/update/${item.id}`}>
                        <ListItem>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            aria-label="Recipe"
                                            src={`${item.thumbnail.path}.jpg`}
                                            className={classes.avatar} />

                                    }
                                    title={item.name}
                                    subheader={`Series: ${item.series.available}`}
                                />
                            </Card>
                        </ListItem>
                    </Link>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div style={{ maxHeight: 700, overflow: 'auto' }}>
                    <List subheader={<li />} >
                        {this.renderListItens()}
                    </List>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return { itens: state.character.itens }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getListingCharactersAPI }, dispatch)
export default (withStyles(styles, { withTheme: true }))(connect(mapStateToProps, mapDispatchToProps)(Listing))