import React from 'react'
import {
    makeStyles, Grid, CardHeader, Avatar, List, ListSubheader, ListItem, ListItemText, ListItemIcon
} from "@material-ui/core"
import { Link } from "react-router-dom"

import routes from "../../../routes"

export const LeftContainer = () => {
    const classes = useStyles()

    function renderListItems(routes) {

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Cadastros
                    </ListSubheader>
                }
                className={classes.root}
            >
                {routes.map(item =>
                    <Link to={item.path}>
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    </Link>
                )}
            </List>
        )
    }

    return (
        <Grid item xs={3}>
            <CardHeader
                className={classes.rightBorder}
                avatar={
                    <Avatar
                        aria-label="Recipe"
                        className={classes.avatar}
                        src="http://hidetoyasunori.com/portfolio/wp-content/uploads/2017/02/marvel_favicon.png" />
                }
            />
            {renderListItems(routes)}
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))
