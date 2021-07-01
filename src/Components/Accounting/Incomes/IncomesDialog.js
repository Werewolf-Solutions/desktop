import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import IncomesTable from './IncomesTable'

export default function IncomesDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <IncomesTable
                    budget={props.budget}
                    authUser={props.authUser}
                    addIncome={props.addIncome}
                    handleChange={props.handleChange}
                    addIncomeDialog={props.addIncomeDialog}
                    handleAddIncomeDialog={props.handleAddIncomeDialog}
                    deleteIncome={props.deleteIncome}
                    date={props.date}
                    selectDate={props.selectDate}
                />
            </Dialog>
        </div>
    )
}