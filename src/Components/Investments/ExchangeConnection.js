import React from 'react';
import {
    Grid,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    Input
} from '@material-ui/core';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

export default function ExchangeConnection(props) {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState();
    const [exchanges, setExchanges] = React.useState([]);

    const handleChangeExchanges = (event) => {
        setExchanges(event.target.value);
    };

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addExchange = async () => {
        // TODO: add axios.post to write it on DB
        const { name, api_sec, api_pub } = state;
        // TODO: handle multiple exchanges
        let exchange = {
            name: exchanges[0],
            api_sec,
            api_pub
        }
        const res = await axios.post('/users/add-exchange', exchange);
        console.log(res.data);
        props.authUser();
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add exchange
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Exchange</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your exchange api keys to connect your account.
                    </DialogContentText>
                    <Grid container>
                        <Grid item>
                        <FormControl>
                            <InputLabel id="demo-mutiple-checkbox-label">Exchanges</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                multiple
                                value={exchanges}
                                onChange={handleChangeExchanges}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                            {props.exchanges_available.map((exchange) => (
                                <MenuItem key={exchange.name} value={exchange.name}>
                                <Checkbox checked={exchanges.indexOf(exchange.name) > -1} />
                                <ListItemText primary={exchange.name} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="api_sec"
                                label="api_sec"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="api_pub"
                                label="api_pub"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
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