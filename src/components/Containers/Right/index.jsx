import React, { Component } from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Grid, CardHeader, CardContent, Avatar, IconButton } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export class RightContainer extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid className={classes.heightAdjust} item xs={9}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            <div className={{
                                background: this.props.img
                            }} />
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<div style={{ fontWeight: 'bold' }}>{this.props.title}</div>}
                />
                <CardContent className={[classes.rightContainer, classes.content]} >
                    <Switch>
                        <Route key='1' exact path="/characters" component={Home} />
                    </Switch>
                </CardContent>
            </Grid>
        )
    }
}
