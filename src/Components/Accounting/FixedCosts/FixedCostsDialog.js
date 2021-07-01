import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import FixedCostsTable from './FixedCostsTable'
import EnhancedTable from '../../Layout/EnhancedTable'

export default function FixedCostsDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <FixedCostsTable
                    budget={props.budget}
                    authUser={props.authUser}
                    addFixedCost={props.addFixedCost}
                    handleChange={props.handleChange}
                    addFixedCostDialog={props.addFixedCostDialog}
                    handleAddFixedCostDialog={props.handleAddFixedCostDialog}
                    deleteFixedCost={props.deleteFixedCost}
                />
            </Dialog>
        </div>
    )
}