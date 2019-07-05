import React from 'react'
import {
    makeStyles, Grid, CardHeader, Avatar, List, ListSubheader,
    ListItem, ListItemText, ListItemIcon
} from "@material-ui/core"
import { Link } from "react-router-dom"

import routes from "../../../routes"


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
                {
                    routes.map(item =>
                        <Link to={item.path}>
                            <ListItem button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>)
                }
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
                        src="https://conteudo.imguol.com.br/c/entretenimento/e2/2017/07/07/marvel-logo-1499441146328_v2_900x506.jpg" />
                }
            />
            {renderListItems(routes)}
        </Grid>
    )
}