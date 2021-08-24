import React from 'react'
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core'
import {
    Delete
} from '@material-ui/icons'

export default function StrategiesTable(props) {
    return (
        <div>
            <Table>
                <TableHead>Table head</TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Amount allocated</TableCell>
                        <TableCell>Volume</TableCell>
                        <TableCell>Depth</TableCell>
                        <TableCell>Coefficient</TableCell>
                        <TableCell>N grids</TableCell>
                    </TableRow>
                    {props.strategies
                    ? props.strategies.map(strategy => 
                        <TableRow>
                            <TableCell>{strategy.name}</TableCell>
                            <TableCell>{strategy.type_}</TableCell>
                            <TableCell>{strategy.amount_allocated}</TableCell>
                            <TableCell>{strategy.volume}</TableCell>
                            <TableCell>{strategy.depth}</TableCell>
                            <TableCell>{strategy.coefficient}</TableCell>
                            <TableCell>{strategy.n_grids}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => props.deleteStrategy(strategy)}
                                ><Delete /></IconButton>
                            </TableCell>
                        </TableRow>)
                    : null}                    
                </TableBody>
            </Table>
        </div>
    )
}
