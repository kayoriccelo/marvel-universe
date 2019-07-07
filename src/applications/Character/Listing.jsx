import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    withStyles, List, ListItem, Card, CardHeader, Avatar, IconButton,
    Paper, InputBase
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

import { getListingCharactersAPI, setTitle } from './store/actions'


const styles = {
    root: {
        width: '100%',
        // backgroundColor: '#151515',
    },
    rootSearch: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: '#151515',
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
    }
}

class Listing extends Component {

    componentWillMount() {
        this.props.setTitle('Characters')
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

    onSearch = (event) => {
        clearTimeout(this.timer)

        this.setState({ search: event.target.value })

        this.timer = setTimeout(
            () => {
                let self = this
                if (self.state.search !== '') {
                    this.props.getListingCharactersAPI({ search: self.state.search })
                }
            }, 1000)
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <div style={{ marginBottom: 15 }}>
                    <Paper className={classes.rootSearch}>
                        <SearchIcon className={classes.iconButton} />
                        <InputBase
                            className={classes.inputSearch}
                            placeholder="Search Characters"
                            inputProps={{ 'aria-label': 'Characters' }}
                            onChange={this.onSearch}
                        />
                    </Paper>
                </div>
                <div style={{ maxHeight: 700, overflow: 'auto' }}>
                    <Paper className={classes.root}>
                        <List subheader={<li />} >
                            {this.renderListItens()}
                        </List>
                    </Paper>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return { itens: state.character.itens }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    getListingCharactersAPI,
    setTitle
}, dispatch)
export default (withStyles(styles, { withTheme: true }))(connect(mapStateToProps, mapDispatchToProps)(Listing))