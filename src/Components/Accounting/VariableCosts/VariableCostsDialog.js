import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import VariableCostsTable from './VariableCostsTable'

export default function VariableCostsDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <VariableCostsTable
                    budget={props.budget}
                    authUser={props.authUser}
                    addVariableCost={props.addVariableCost}
                    handleChange={props.handleChange}
                    addVariableCostDialog={props.addVariableCostDialog}
                    handleAddVariableCostDialog={props.handleAddVariableCostDialog}
                    deleteVariableCost={props.deleteVariableCost}
                    date={props.date}
                    selectDate={props.selectDate}
                />
            </Dialog>
        </div>
    )
}
 /**
  * <EnhancedTable
        title={"Variable Costs"}
        rows={props.budget.variable_costs}
    />
  */