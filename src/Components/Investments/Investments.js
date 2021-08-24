import React from 'react';
import {
    Button,
    Grid
} from '@material-ui/core';
import Cefi from './Cefi/Cefi';

export default function Investments(props) {

    return (
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Cefi
                        user={props.user}
                        update={props.update}
                        authUser={props.authUser}
                        exchanges={props.exchanges}
                        setExchanges={props.setExchanges}
                    />
                </Grid>
            </Grid>
        </div>
    )
}