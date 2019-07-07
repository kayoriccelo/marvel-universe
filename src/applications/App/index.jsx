import React from "react"
import { Router } from 'react-router-dom'
import { withStyles, Grid, Card } from "@material-ui/core"

import history from '../../history'
import { LeftContainer, RightContainer } from '../../components'
import { styles } from './styles'


const App = ({ classes }) => {
    return (
        <Router history={history}>
            <div className={classes.background} />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <Grid container>
                            <LeftContainer classes={classes} />
                            <RightContainer classes={classes} />
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Router>
    )
}

export default withStyles(styles)(App)
