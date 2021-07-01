import React, { Component } from 'react'
import logo from '../../files/logo.jpeg'
import {
    Typography, Divider, Grid
} from '@material-ui/core'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item>
                        <img src={logo}  alt="logo" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" >Werewolf</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}