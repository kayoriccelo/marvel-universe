import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, CardHeader, CardContent } from '@material-ui/core'
import { Route, Switch } from "react-router-dom"

import { ListingCharacter, UpdateCharacter } from '../../../applications/Character'


export class RightContainer extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid className={classes.heightAdjust} item xs={9}>
                <CardHeader
                    title={<div>{this.props.title || 'Dashboard'}</div>}
                />
                <CardContent className={[classes.rightContainer, classes.content]} >
                    <Switch>
                        <Route key='1' exact path="/characters/listing" component={ListingCharacter} />
                        <Route key='2' exact path="/characters/update/:id" component={UpdateCharacter} />
                        <Route key='3' exact path="/characters/update/:id/:tab" component={UpdateCharacter} />
                    </Switch>
                </CardContent>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return { title: state.right.title }
}
export default connect(mapStateToProps, null)(RightContainer)
