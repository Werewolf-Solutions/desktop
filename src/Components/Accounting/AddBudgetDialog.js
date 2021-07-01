import React from 'react'
import {
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from '@material-ui/core'
import CheckBoxGridList from '../Layout/CheckBoxGridList'

export default function AddBudgetDialog(props) {       

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <DialogTitle>Add your budget</DialogTitle>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                        <TextField
                            variant="outlined"
                            required                        
                            id="name"
                            label="name"
                            name="name"
                            autoComplete="name"
                            onChange={props.handleChange}
                        />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button onClick={props.addBudget}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
