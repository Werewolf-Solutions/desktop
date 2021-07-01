import React from 'react';
import {
    Button,
    Grid
} from '@material-ui/core';
import ExchangeConnection from './ExchangeConnection';
import ExchangesTable from './ExchangesTable';
import ActiveBots from './ActiveBots';
import BotInterface from './BotInterface';

export default function Investments(props) {

    const [open, setOpen] = React.useState(false);

    let exchanges_available = [{name: 'crypto.com'}];

    /**
     * bot status
     * 
     * live-trader
     * 
     * paper-trader
     * 
     * backtest
     * 
     */

    let strategies = ['grid', 'pair', 'custom'];

    let bots = [{
        id: 1,
        status: 'live-trader',
        strategy: 'grid',
        exchanges: ['crypto.com'],
        volume: 5,
        order_limit: 1,
        sec_coins: [] // if empty choose from available in balance
    },{
        id: 2,
        status: 'live-trader',
        strategy: 'pair',
        exchanges: ['crypto.com'],
        volume: 5,
        order_limit: 1,
        sec_coins: [] // if empty choose from available in balance
    },{
        id: 3,
        status: 'live-trader',
        strategy: 'custom',
        exchanges: ['crypto.com'],
        volume: 5,
        order_limit: 1,
        sec_coins: [] // if empty choose from available in balance
    }]

    let sec_coins = ['AAVE', 'ADA', 'LINK'];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid container column>
                <Grid item container>
                    <Grid item container column>
                        <Grid item>
                            <ExchangeConnection
                                exchanges_available={exchanges_available}
                                authUser={props.authUser}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={handleClickOpen}
                            >Set your bot</Button>
                            <BotInterface
                                open={open}
                                exchanges_available={exchanges_available}
                                strategies={strategies}
                                sec_coins={sec_coins}
                                onClose={handleClose}
                                handleClickOpen={handleClickOpen}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ExchangesTable
                            exchanges_available={exchanges_available}
                            user={props.user}
                            authUser={props.authUser}
                        />
                    </Grid>
                    <Grid item>
                        <ActiveBots
                            bots={bots}
                        />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        Total assets
                    </Grid>
                    <Grid item>
                        Total debt
                    </Grid>
                    <Grid item>
                        Net worth
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}