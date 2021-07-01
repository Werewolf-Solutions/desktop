import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'nowrap',
    },    
}));

export default function CheckBoxGridList(props) {
    const classes = useStyles();
    
    return (
        <div>
            <Grid className={classes.root} container>
            {props.data.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return(
                    <Grid key={value} role={undefined} button onClick={props.handleSelect(value)} item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    edge="start"
                                    checked={props.checked ? props.checked.indexOf(value) !== -1 : false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            }
                            label={value}
                        />                                       
                    </Grid>
            )})}
        </Grid>
      </div>
    )
}