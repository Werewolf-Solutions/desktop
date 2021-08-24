import React from 'react'
import {
    Dialog,
    Button,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from '@material-ui/core'

export default function AddStrategyDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle id="form-dialog-title">Add Strategy</DialogTitle>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item container direction="row">
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="name"
                                    label="name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="type_"
                                    label="type_"
                                    name="type_"
                                    autoComplete="type_"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="volume"
                                    label="volume"
                                    name="volume"
                                    autoComplete="volume"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="amount_allocated"
                                    label="amount_allocated"
                                    name="amount_allocated"
                                    autoComplete="amount_allocated"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row">
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="depth"
                                    label="depth"
                                    name="depth"
                                    autoComplete="depth"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    id="coefficient"
                                    label="coefficient"
                                    name="coefficient"
                                    autoComplete="coefficient"
                                    onChange={props.handleChange}
                                />
                            </Grid>                            
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.addStrategy} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
