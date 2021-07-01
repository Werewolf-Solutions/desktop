import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DatePicker(props) {
    const classes = useStyles();
  
    return (
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={props.date}
            onChange={props.selectDate}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
        </form>
    );
}