import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, CardHeader, CardContent, IconButton, Box, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Route, Switch } from "react-router-dom"

import { ListingCharacter, UpdateCharacter } from '../../../applications/Character'
import { getListingCharactersAPI } from '../../../applications/Character/store/actions'


export class RightContainer extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid className={classes.heightAdjust} item xs={9}>
                <CardHeader
                    avatar={
                        <div>
                            <Box component="span" m={1}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Characters"
                                    inputProps={{ 'aria-label': 'Search Characters' }}
                                    onChange={(e) => this.props.getListingCharactersAPI({ search: e.target.value })}
                                />
                                <IconButton className={classes.iconButton} aria-label="Search">
                                    <SearchIcon />
                                </IconButton>
                            </Box>
                        </div>
                    }
                    title={<div style={{ fontWeight: 'bold' }}>{this.props.title}</div>}
                />
                <CardContent className={[classes.rightContainer, classes.content]} >
                    <Switch>
                        <Route key='1' exact path="/characters/listing" component={ListingCharacter} />
                        <Route key='2' exact path="/characters/update/:id" component={UpdateCharacter} />
                    </Switch>
                </CardContent>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getListingCharactersAPI }, dispatch)
export default connect(mapDispatchToProps)(RightContainer)
