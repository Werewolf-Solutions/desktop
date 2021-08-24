import React from 'react'
import {
    Grid,
    Button
} from '@material-ui/core'

import ExchangesTable from './ExchangesTable'
import AddExchangeDialog from './AddExchangeDialog'
import AddBotDialog from './AddBotDialog'
import AddStrategyDialog from './AddStrategyDialog'

import axios from 'axios'
import StrategiesDialog from './StrategiesDialog'
import BotsDialog from './BotsDialog'

export default function Cefi(props) {

    const exchangesAvailable = ['crypto.com']

    const modesAvailable = ['live-trader', 'paper-trader', 'back-test']

    const [addExchangeDialog, setAddExchangeDialog] = React.useState(false)
    const [addBotDialog, setAddBotDialog] = React.useState(false)
    const [addStrategyDialog, setAddStrategyDialog] = React.useState(false)
    const [strategiesDialog, setStrategiesDialog] = React.useState(false)
    const [botsDialog, setBotsDialog] = React.useState(false)

    const [pairsAvailable, setPairsAvailable] = React.useState(props.user.available_pairs)
    const [exchangeSelected, setExchangeSelected] = React.useState()
    const [strategySelected, setStrategySelected] = React.useState()
    const [pairSelected, setPairSelected] = React.useState()
    const [modeSelected, setModeSelected] = React.useState()
    const [strategies, setStrategies] = React.useState(props.user.strategies)
    const [tradingBots, setTradingBots] = React.useState(props.user.tradingBots)
    const [state, setState] = React.useState()
    
    const handleAddExchangeDialog = () => {
        setAddExchangeDialog(!addExchangeDialog)
    }

    const handleBotsDialog = () => {
        setBotsDialog(!botsDialog)
    }

    const handleAddBotDialog = () => {
        setAddBotDialog(!addBotDialog)
    }

    const handleAddStrategyDialog = () => {
        setAddStrategyDialog(!addStrategyDialog)
    }

    const handleStrategiesDialog = () => {
        setStrategiesDialog(!strategiesDialog)
    }

    const handleExchangeSelect = (e) => {
        setExchangeSelected(e.target.value)
    }

    const handleModeSelect = (e) => {
        setModeSelected(e.target.value)
    }

    const handleStrategySelect = (e) => {
        setStrategySelected(e.target.value)
    }

    const handlePairSelect = (e) => {
        setPairSelected(e.target.value)
    }

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value})
    }

    /**
     * Start & Stop bot
     */

    const handleBotStatus = async (bot) => {
        console.log(bot)
        if (bot.status === 'off') {
            // start bot
            let res = await axios.post('users/start-bot', {tradingBot: bot})
            console.log(res.data)
            props.authUser()
        } else if (bot.status === 'on') {
            // stop bot
            let res = await axios.post('users/stop-bot', {tradingBot: bot})
            console.log(res.data)
            props.authUser()
        }
    }

    /**
     * Crud exchange
     */

    const addExchange = async () => {
        const { api_sec, api_pub } = state
        let exchange = {
            name: exchangeSelected,
            api_sec,
            api_pub
        }
        const res = await axios.post('/users/add-exchange', exchange)
        props.authUser()
        handleAddExchangeDialog()
    }

    const deleteExchange = async (exchange) => {
        const res = await axios.post('/users/delete-exchange', {exchange_id: exchange.id})
        console.log(res.data)
        props.authUser()
    }

    /**
     * Crud bot
     */

    const addBot = async () => {
        let bot = {
            pair: {i: pairSelected},
            strategy_id: strategySelected._id,
            exchange_id: exchangeSelected.id,
            mode: modeSelected,
            status: 'off'
        }
        const res = await axios.post('/users/add-bot', {tradingBot: bot})
        props.authUser()
        handleAddBotDialog()
    }

    const deleteBot = async (bot) => {
        const res = await axios.post('/users/delete-bot', {tradingBot_id: bot._id})
        console.log(res.data)
        props.authUser()
    }

    const editBot = (bot) => {

    }

    /**
     * Crud strategy
     */

    const addStrategy = async () => {
        const {
            name,
            type_,
            volume,
            amount_allocated,
            depth,
            coefficient
        } = state
        let strat = {name, type_, volume, amount_allocated, depth, coefficient}
        const res = await axios.post('/users/add-strat', {strategy: strat})
        props.authUser()
        handleAddStrategyDialog()
    }

    const deleteStrategy = async (strategy) => {
        const res = await axios.post('/users/delete-strat', {strategy_id: strategy._id})
        console.log(res.data)
        props.authUser()
    }

    const editStrategy = (strategy) => {
        
    }

    const showBotsLogs = (exchange) => {
        console.log(exchange)
        /**
         * TODO:
         * 
         * start a timeOut here? or useEffect?
         */
    }

    // useEffect(() => {
    //     showBotsLogs(exchange)
    //     return () => {
    //         cleanup
    //     }
    // }, [])

    return (
        <div>
            <AddExchangeDialog
                open={addExchangeDialog}
                onClose={handleAddExchangeDialog}
                exchangesAvailable={exchangesAvailable}
                exchangeSelected={exchangeSelected}
                handleExchangeSelect={handleExchangeSelect}
                addExchange={addExchange}
                handleChange={handleChange}
            />
            <AddBotDialog
                open={addBotDialog}
                onClose={handleAddBotDialog}
                handleChange={handleChange}
                pairsAvailable={pairsAvailable}
                strategies={props.user.strategies}
                strategySelected={strategySelected}
                handleStrategySelect={handleStrategySelect}
                pairSelected={pairSelected}
                handlePairSelect={handlePairSelect}
                addBot={addBot}
                exchanges={props.user.exchanges}
                modesAvailable={modesAvailable}
                handleExchangeSelect={handleExchangeSelect}
                handleModeSelect={handleModeSelect}
                modeSelected={modeSelected}
            />
            <AddStrategyDialog
                open={addStrategyDialog}
                onClose={handleAddStrategyDialog}
                addStrategy={addStrategy}
                handleChange={handleChange}
            />
            <StrategiesDialog
                open={strategiesDialog}
                onClose={handleStrategiesDialog}
                strategies={props.user.strategies}
                deleteStrategy={deleteStrategy}
            />
            <BotsDialog
                open={botsDialog}
                onClose={handleBotsDialog}
                tradingBots={props.user.tradingBots}
                handleBotStatus={handleBotStatus}
                deleteBot={deleteBot}
            />
            <Grid container direction="column">
                <Grid item container direction="row">
                    <Grid item>
                        <Button
                            onClick={handleAddExchangeDialog}
                        >add exchange</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleAddBotDialog}
                        >add bot</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleAddStrategyDialog}
                        >add strat</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleStrategiesDialog}
                        >Strategies</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleBotsDialog}
                        >Bots</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <ExchangesTable
                        user={props.user}
                        authUser={props.authUser}
                        deleteExchange={deleteExchange}
                        exchanges={props.exchanges}
                        showBotsLogs={showBotsLogs}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
