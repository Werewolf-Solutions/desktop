import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ListItemText,
    Checkbox,
    Input,
    DialogActions,
    Button
} from '@material-ui/core';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

export default function BotInterface(props) {
    const { onClose, open } = props;

    const [exchanges, setExchanges] = React.useState([]);
    const [strategies, setStrategies] = React.useState([]);
    const [sec_coins, setSecCoins] = React.useState(props.sec_coins);
    const [state, setState] = React.useState();

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    const handleChangeExchanges = (event) => {
        setExchanges(event.target.value);
    };

    const handleChangeStrategies = (event) => {
        setStrategies(event.target.value);
    };

    const handleChangeSecCoins = (event) => {
        setSecCoins(event.target.value);
    };

    const startBot = async () => {
        // send bot obj to server and start bot
        let { volume, order_limit, threshold } = state;
        let obj = {
            // COIN,
            order_limit,
            volume,
            exchanges,
            strategies,
            sec_coins,
            threshold
        };
        const res = await axios.post('/api/trading-bot', obj);
        console.log(res.data);
        onClose();
    }

    return(
        <div>
            <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Set your bot</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your custom variables
                </DialogContentText>
                <Grid container>
                    <Grid item>
                    <FormControl>
                        <InputLabel id="demo-mutiple-checkbox-label">Exchanges</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={exchanges}
                            onChange={handleChangeExchanges}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                        {props.exchanges_available.map((exchange) => (
                            <MenuItem key={exchange.name} value={exchange.name}>
                            <Checkbox checked={exchanges.indexOf(exchange.name) > -1} />
                            <ListItemText primary={exchange.name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <InputLabel id="demo-mutiple-checkbox-label">Strategies</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={strategies}
                            onChange={handleChangeStrategies}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                        {props.strategies.map((strategy) => (
                            <MenuItem key={strategy} value={strategy}>
                            <Checkbox checked={strategies.indexOf(strategy) > -1} />
                            <ListItemText primary={strategy} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="volume"
                            label="volume"
                            type="volume"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="order_limit"
                            label="order limit"
                            type="order_limit"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <InputLabel id="demo-mutiple-checkbox-label">Secondary coins</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={sec_coins}
                            onChange={handleChangeSecCoins}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                        {props.sec_coins.map((sec_coin) => (
                            <MenuItem key={sec_coin} value={sec_coin}>
                            <Checkbox checked={sec_coins.indexOf(sec_coin) > -1} />
                            <ListItemText primary={sec_coin} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="threshold"
                            label="threshold"
                            type="threshold"
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={startBot} color="primary">
                    Confirm
                </Button>
                </DialogActions>
            </DialogContent>
            </Dialog>
        </div>
    )
}