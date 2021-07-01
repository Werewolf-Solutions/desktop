import React from 'react'
import { Dialog } from '@material-ui/core'

export default function PopUpMessage(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                {props.msg}
            </Dialog>
        </div>
    )
}
