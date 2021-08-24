import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import StrategiesTable from './StrategiesTable'

export default function StrategiesDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                <StrategiesTable
                    strategies={props.strategies}
                    deleteStrategy={props.deleteStrategy}
                />
            </Dialog>
        </div>
    )
}
