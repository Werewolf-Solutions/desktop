import React from 'react'
import {
    Dialog,
    DialogTitle,
    Grid,
    TextField,
    DialogActions,
    DialogContent,
    Button,
} from '@material-ui/core'

import axios from 'axios'

export default function AddFixedCostDialog(props) {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <DialogTitle>Add a fixed cost</DialogTitle>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item container direction="row">
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="due_day"
                                    label="due_day"
                                    name="due_day"
                                    autoComplete="due_day"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="from"
                                    label="from"
                                    name="from"
                                    autoComplete="from"
                                    onChange={props.handleChange}
                                />
                            </Grid>                            
                        </Grid>
                        <Grid item container direction="row">
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="amount"
                                    label="amount"
                                    name="amount"
                                    autoComplete="amount"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="to"
                                    label="to"
                                    name="to"
                                    autoComplete="to"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="frequency"
                                    label="frequency"
                                    name="frequency"
                                    autoComplete="frequency"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="notes"
                                    label="notes"
                                    name="notes"
                                    autoComplete="notes"
                                    onChange={props.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button onClick={props.addFixedCost}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
