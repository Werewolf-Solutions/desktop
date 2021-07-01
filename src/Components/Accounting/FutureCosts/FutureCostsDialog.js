import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import FutureCostsTable from './FutureCostsTable'

export default function FutureCostsDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <FutureCostsTable
                    budget={props.budget}
                    authUser={props.authUser}
                    addFutureCost={props.addFutureCost}
                    handleChange={props.handleChange}
                    addFutureCostDialog={props.addFutureCostDialog}
                    handleAddFutureCostDialog={props.handleAddFutureCostDialog}
                    deleteFutureCost={props.deleteFutureCost}
                    date={props.date}
                    selectDate={props.selectDate}
                />
            </Dialog>
        </div>
    )
}
