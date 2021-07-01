import React from 'react'
import {
    Dialog,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core'

export default function BalanceDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
            >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >Coin</TableCell>
                                <TableCell align="right">Available</TableCell>
                                <TableCell align="right">Stake</TableCell>
                                <TableCell align="right">Order</TableCell>
                                <TableCell align="right">Balance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.account.map((account) => (
                                <TableRow>
                                    <TableCell >{account.currency}</TableCell>
                                    <TableCell align="right">{account.available}</TableCell>
                                    <TableCell align="right">{account.stake}</TableCell>
                                    <TableCell align="right">{account.order}</TableCell>
                                    <TableCell align="right">{account.balance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </div>
    )
}
