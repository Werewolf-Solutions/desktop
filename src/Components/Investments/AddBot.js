import React from 'react';
import {
    Grid,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import axios from 'axios';

export default function AddBot(props) {
    const [state, setState] = React.useState();

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    const addExchange = () => {
        // TODO: add axios.post to write it on DB
        const { name, api_sec, api_pub } = state;
        let exchange = {
            name,
            api_sec,
            api_pub
        }
        console.log(exchange);
        props.handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Bot {props.exchange ? 'for ' + props.exchange.name : null}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your exchange api keys to connect your account.
                    </DialogContentText>
                    <Grid container>
                        <Grid item>
                            Select between existing bots or add a custom name
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="volume"
                                label="volume"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="order_limit"
                                label="order_limit"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="maker_fee"
                                label="maker_fee"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="taker_fee"
                                label="taker_fee"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addExchange} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}