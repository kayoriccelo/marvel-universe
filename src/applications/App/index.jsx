import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ImageIcon from "@material-ui/icons/Image"
import WorkIcon from "@material-ui/icons/Work"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List,
    ListItem, ListItemText, IconButton } from "@material-ui/core"

import { styles } from './styles'


const App = ({ classes }) => (
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
)

const list = [
    { id: 1, name: "Diego",  image: <ImageIcon /> },
    { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
    { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> }
]

const LeftContainer = ({ classes }) => (
    <Grid item xs={3}>
        <CardHeader
            className={classes.rightBorder}
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    H
        </Avatar>
            }
        />
        <Paper className={classes.paper} elevation={0}>
            <Typography className={classes.information} variant="subheader">
                Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
        </Paper>
        <List>
            {list.map(item => (
                <ListItem>
                    <Avatar>{item.image}</Avatar>
                    <ListItemText primary={item.name} secondary={item.text} />
                </ListItem>
            ))}
        </List>
    </Grid>
)

const RightContainer = ({ classes }) => (
    <Grid className={classes.heightAdjust} item xs={9}>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    <div className={{
                        background: "url(https://conteudo.imguol.com.br/c/entretenimento/e2/2017/07/07/marvel-logo-1499441146328_v2_900x506.jpgx)"
                    }} />
                </Avatar>
            }
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            title={<div style={{fontWeight: 'bold'}}>Marvel Universe</div>}
        />
        <CardContent className={[classes.rightContainer, classes.content]} />
    </Grid>
)

export default withStyles(styles)(App)