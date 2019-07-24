import React from 'react'
import {
    withStyles, Grid, CardHeader, Avatar, List, ListSubheader, ListItem, ListItemText, ListItemIcon
} from "@material-ui/core"
import { Link } from "react-router-dom"

import routes from "../../../routes"
import leftStyle from './styles'

const LeftContainer = ({ classes }) => {

    const renderMenuItem = (item) => (
        <Link to={item.path} key={item.title}>
            <ListItem button key={item.title}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
        </Link>
    )

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
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={<ListSubheader component="div" id="nested-list-subheader"> Cadastros </ListSubheader>}
                className={classes.root}
            >
                {routes.map(item => renderMenuItem(item))}
            </List>
        </Grid>
    )
}

export default withStyles(leftStyle, { withTheme: true })(LeftContainer)