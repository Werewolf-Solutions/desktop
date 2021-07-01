import React from 'react'
import {
    Grid,
    IconButton,
    AppBar,
    makeStyles
} from '@material-ui/core'
import {
    Facebook,
    Email,
    LinkedIn,
    Twitter,
    Telegram
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Grid
                    container
                    justify="space-around"
                >
                    <Grid item>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        Facebook
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                        LinkedIn
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        Discord
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Telegram />
                        </IconButton>
                        Telegram
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Twitter />
                        </IconButton>
                        Twitter
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Email />
                        </IconButton>
                        Email
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}