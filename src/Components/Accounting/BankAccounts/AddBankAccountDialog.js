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
import DatePicker from '../../Layout/DatePicker'

export default function AddBankAccountDialog(props) {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <DialogTitle>Add a bank account</DialogTitle>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item container direction="row">
                            <Grid item>
                                <DatePicker
                                    date={props.date}
                                    selectDate={props.selectDate}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    required                        
                                    id="bank_name"
                                    label="bank_name"
                                    name="bank_name"
                                    autoComplete="bank_name"
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
                    <Button onClick={props.addBankAccount}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}