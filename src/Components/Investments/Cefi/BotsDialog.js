import React from 'react'
import { Dialog } from '@material-ui/core'
import BotsTable from './BotsTable'

export default function BotsDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                <BotsTable
                    tradingBots={props.tradingBots}
                    deleteBot={props.deleteBot}
                    handleBotStatus={props.handleBotStatus}
                />
            </Dialog>
        </div>
    )
}
