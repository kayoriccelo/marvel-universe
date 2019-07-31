import React, { useState, useEffect } from 'react'
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
import { styleUpdate } from './styles'


export const Update = props => {
    const [instance, setInstance] = useState(null)
    const [tabValue, setTabValue] = useState(0)

    const { setTitle, clearSeries, loadCharacter } = props

    useEffect(() => {
        instance === null && loadCharacter({ id: props.id }).then(resp => {
            instance !== props.instance && setInstance(props.instance)
        })
    }, [instance, props.instance, props.id, loadCharacter])

    useEffect(() => {
        props.tab === 'series' && setTabValue(1)
        setTitle(`Update Character ${instance && instance.name}`)

        return () => {
            setTitle(`Dashboard`)
            clearSeries()
        }
    }, [props.tab, instance, setTitle, clearSeries])

    const handleChange = (event, name) => {
        setInstance({ ...instance, [name]: event.target.value })
        props.setTitle(`Update Character ${instance.name}`)
    }

    const handleChangeTab = (event, value) => {
        setTabValue(value)
    }

    const handlerSubmit = () => {
        props.updateCharacter({ instance, itens: props.itens })
    }

    const renderSeries = () => {
        return (
            props.series.map(item => {
                return [<ListItem key={item.name} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={`${item.thumbnail.path}.jpg`} className={props.classes.avatar} />
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

    return (
        instance &&
        <Card>
            <CardMedia
                className={props.classes.media}
                image={`${instance.thumbnail.path}.jpg`}
                title={instance.name}
            />
            <CardContent>
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab key='0' value={0} icon={<PersonPinIcon />} aria-label="Person" />
                    <Tab key='1' value={1} icon={<ListIcon />} aria-label="Series" />
                </Tabs>
                {tabValue === 0 &&
                    <div>
                        <div>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={props.classes.textField}
                                value={instance.name}
                                onChange={(e) => handleChange(e, 'name')}
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
                                value={instance.description}
                                onChange={(e) => handleChange(e, 'description')}
                                className={props.classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>}

                {tabValue === 1 &&
                    <div style={{ maxHeight: 300, overflow: 'auto' }}>
                        <List className={props.classes.root}>
                            {renderSeries()}
                        </List>
                    </div>
                }
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handlerSubmit}>
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

const mapStateToProps = (state) => ({
    itens: state.character.itens,
    instance: state.character.instance,
    series: state.character.series
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default withStyles(styleUpdate)(connect(mapStateToProps, mapDispatchToProps)(Update))