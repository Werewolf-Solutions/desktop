import React from 'react';
import {
    Grid,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableRow,
    TableCell
} from '@material-ui/core';

export default function AddBot(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Bot</DialogTitle>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item container direction="row">
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="select-pair">Pair</InputLabel>
                                    <Select
                                        labelId="select-pair"
                                        id="select-pair"
                                        value={props.pairSelected}
                                        onChange={props.handlePairSelect}
                                    >
                                        {props.pairsAvailable
                                        ? props.pairsAvailable.map(pair => <MenuItem value={pair.i}>{pair.i}</MenuItem>)
                                        : null}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="select-strategy">Strategy</InputLabel>
                                    <Select
                                        labelId="select-strategy"
                                        id="select-strategy"
                                        value={props.strategySelected}
                                        onChange={props.handleStrategySelect}
                                    >
                                        {props.strategies
                                        ? props.strategies.map(strategy => <MenuItem value={strategy}>{strategy.name}</MenuItem>)
                                        : null}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel id="select-mode">Mode</InputLabel>
                                    <Select
                                        labelId="select-mode"
                                        id="select-mode"
                                        value={props.modeSelected}
                                        onChange={props.handleModeSelect}
                                    >
                                        {props.modesAvailable
                                        ? props.modesAvailable.map(mode => <MenuItem value={mode}>{mode}</MenuItem>)
                                        : null}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                            <FormControl>
                                <InputLabel id="demo-mutiple-checkbox-label">Exchanges</InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    value={props.exchangeSelected}
                                    onChange={props.handleExchangeSelect}
                                >
                                {props.exchanges
                                ? props.exchanges.map((exchange) => (
                                    <MenuItem key={exchange} value={exchange}>{exchange.name}</MenuItem>
                                ))
                                : null}
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item>
                            Details
                            {props.strategySelected
                            ?   <div>
                                    <Table>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Volume</TableCell>
                                            <TableCell>Amount allocated</TableCell>
                                            <TableCell>N grids</TableCell>
                                            <TableCell>Depth</TableCell>
                                            <TableCell>Coefficient</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>{props.strategySelected.name}</TableCell>
                                            <TableCell>{props.strategySelected.type_}</TableCell>
                                            <TableCell>{props.strategySelected.volume}</TableCell>
                                            <TableCell>{props.strategySelected.amount_allocated}</TableCell>
                                            <TableCell>{props.strategySelected.n_grids}</TableCell>
                                            <TableCell>{props.strategySelected.depth}</TableCell>
                                            <TableCell>{props.strategySelected.coefficient}</TableCell>
                                        </TableRow>
                                    </Table>
                                </div>
                            : null}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.addBot} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}