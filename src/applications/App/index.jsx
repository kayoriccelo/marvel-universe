import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router } from 'react-router-dom'

import { Grid, Card } from "@material-ui/core"
import { LeftContainer, RightContainer } from '../../components'

import { styles } from './styles'


class App extends Component {

    render() {
        const { classes } = this.props

        return (
            <Router>
                <div>
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
                </div>
            </Router>
        )
    }

}

export default withStyles(styles)(App)