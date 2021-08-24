import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ListItemText,
    Input,
    Checkbox,
    TextField,
    Grid,
    Button
} from '@material-ui/core'

export default function AddExchangeDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
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
                                value={props.exchangeSelected}
                                onChange={props.handleExchangeSelect}
                            >
                            {props.exchangesAvailable.map((exchange) => (
                                <MenuItem key={exchange} value={exchange}>{exchange}</MenuItem>
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
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="api_pub"
                                label="api_pub"
                                onChange={props.handleChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.addExchange} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
