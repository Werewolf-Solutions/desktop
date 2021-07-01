import React from 'react'
import {
    Grid,
    IconButton,
    Button,
    Typography
} from '@material-ui/core'
import {
    Menu,
} from '@material-ui/icons'
import axios from 'axios'

export default function HeaderIn(props) {
    const handleLogOut = () => {
        axios.get('/users/sign-out')
        .then(res => {
            console.log(res.data);
            props.authUser();
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <Grid item container>                
                <Grid item>
                    <Button onClick={handleLogOut}>Logout</Button>
                </Grid>                
            </Grid>
        </div>
    )
}