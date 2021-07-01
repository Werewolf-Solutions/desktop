import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import BankAccountsTable from './BankAccountsTable'

export default function BankAccountsDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <BankAccountsTable
                    budget={props.budget}
                    authUser={props.authUser}
                    addBankAccount={props.addBankAccount}
                    handleChange={props.handleChange}
                    addBankAccountDialog={props.addBankAccountDialog}
                    handleAddBankAccountDialog={props.handleAddBankAccountDialog}
                    deleteBankAccount={props.deleteBankAccount}
                    date={props.date}
                    selectDate={props.selectDate}
                />
            </Dialog>
        </div>
    )
}
