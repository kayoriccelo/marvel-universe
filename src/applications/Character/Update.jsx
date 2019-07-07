import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    withStyles, TextField, Card, CardContent, CardMedia, CardActions, Button,
    Tabs, Tab, ListItem, ListItemAvatar, Avatar, ListItemText, Typography,
    Divider, List
} from '@material-ui/core'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import ListIcon from '@material-ui/icons/List'
import history from '../../history'

import * as Actions from './store/actions'

const style = {
    root: {
        width: '100%'
    },
    textField: {
        width: '100%'
    },
    container: {

    },
    card: {

    },
    media: {
        top: 0,
        height: 250
    },
    avatar: {
        margin: 10,
        width: 80,
        height: 80,
    }
}

export class Update extends Component {

    constructor(props) {
        super(props)

        this.state = {
            instance: null,
            tabValue: 0,
        }
    }

    componentDidMount() {
        this.props.loadCharacter({ id: this.props.id }).then(response => {
            if (this.props.tab === 'series') this.setState({ tabValue: 1 })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.instance === null) {
            this.setState({ instance: this.props.instance })
        }
    }

    handleChange = (event, name) => {
        this.setState({ instance: { ...this.state.instance, [name]: event.target.value } })
    }

    handleChangeTab = (event, value) => {
        this.setState({ tabValue: value })
    }

    handlerSubmit = () => {
        this.props.updateCharacter({ instance: this.state.instance, itens: this.props.itens })
    }

    renderSeries = () => {
        const { classes } = this.props

        return (
            this.props.series.map(item => {
                return [<ListItem key={item.name} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={`${item.thumbnail.path}.jpg`} className={classes.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.title}
                        secondary={
                            <React.Fragment>
                                <Typography color="textPrimary">
                                    {item.description}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>,
                <Divider variant="inset" component="li" />]
            })
        )
    }

    render() {
        const { classes } = this.props
        const { instance } = this.state

        return (
            instance &&
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={`${this.state.instance.thumbnail.path}.jpg`}
                    title={this.state.instance.name}
                />
                <CardContent>
                    <Tabs
                        value={this.state.tabValue}
                        onChange={this.handleChangeTab}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab key='0' value={0} icon={<PersonPinIcon />} aria-label="Person" />
                        <Tab key='1' value={1} icon={<ListIcon />} aria-label="Series" />
                    </Tabs>
                    {this.state.tabValue === 0 &&
                        <div>
                            <div>
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.instance.name}
                                    onChange={(e) => this.handleChange(e, 'name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Description"
                                    multiline
                                    rowsMax="5"
                                    value={this.state.instance.description}
                                    onChange={(e) => this.handleChange(e, 'description')}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                        </div>}

                    {this.state.tabValue === 1 &&
                        <div style={{ maxHeight: 300, overflow: 'auto' }}>
                            <List className={classes.root}>
                                {this.renderSeries()}
                            </List>
                        </div>
                    }
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={this.handlerSubmit}>
                        Save
                    </Button>
                    <Button size="small" color="primary" onClick={() => {
                        history.push('/characters/listing')
                    }}>
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        itens: state.character.itens,
        instance: state.character.instance,
        series: state.character.series
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(Update))