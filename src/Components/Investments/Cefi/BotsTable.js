import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Switch
} from '@material-ui/core'
import {
    Delete
} from '@material-ui/icons'

export default function BotsTable(props) {
    console.log(props.tradingBots[0])
    return (
        <div>
            <Table>
                <TableHead>Head</TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Pair</TableCell>
                        <TableCell>Exchange</TableCell>
                        <TableCell>Strategy</TableCell>
                        <TableCell>Mode</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                    {props.tradingBots.map(bot => 
                        <TableRow>
                            <TableCell>{bot.pair.i}</TableCell>
                            <TableCell>{bot.exchange}</TableCell>
                            <TableCell>{bot.strategy}</TableCell>
                            <TableCell>{bot.mode}</TableCell>
                            <TableCell>{bot.status}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => props.deleteBot(bot)}
                                ><Delete /></IconButton>
                            </TableCell>
                            <TableCell>
                                <Switch
                                    checked={bot.status === 'on' ? true : false}
                                    onChange={() => props.handleBotStatus(bot)}
                                />
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}
