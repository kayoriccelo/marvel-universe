import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Grid, CardHeader, CardContent } from '@material-ui/core'
import { Route, Switch } from "react-router-dom"

import { ListingCharacter, UpdateCharacter } from '../../../applications/Character'
import rightStyle from './styles'


export const RightContainer = ({ classes, title }) => {

    return (
        <Grid className={classes.heightAdjust} item xs={9}>
            <CardHeader
                title={<div>{title || 'Dashboard'}</div>}
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

const mapStateToProps = ({ right }) => ({ title: right.title })

export default connect(mapStateToProps, null)(withStyles(rightStyle, { withTheme: true })(RightContainer))
