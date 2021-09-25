import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    Button,
    Typography
} from '@material-ui/core'
import { format, compareAsc } from 'date-fns'

import AddBudgetDialog from './AddBudgetDialog'
import FixedCostsDialog from './FixedCosts/FixedCostsDialog'
import VariableCostsDialog from './VariableCosts/VariableCostsDialog'
import FutureCostsDialog from './FutureCosts/FutureCostsDialog'
import IncomesDialog from './Incomes/IncomesDialog'
import BankAccountsDialog from './BankAccounts/BankAccountsDialog'
import CheckboxesForm from '../Layout/CheckboxesForm'

// import accounting from '../../funcs/accounting'
import CheckBoxGridList from '../Layout/CheckBoxGridList'

import axios from 'axios'

const accounting = {
    update: async (budget) => {
        const res = await axios.post('users/accounting', {budget_id: budget._id})
        return res.data
    },
    addBudget: async (name) => {
        const res = await axios.post('/users/add-budget', {budget: { name: name }})
        return res.data
    },
    editBudget: async (budget, working_days) => {
        const res = await axios.post('/users/edit-budget', {budget_id: budget._id, working_days: working_days})
        return res.data
    },
    deleteBudget: async (budget_id) => {
        const res = await axios.post('/users/delete-budget', {budget_id})
        return res.data
    },
    addFixedCost: async (budget, fixed_cost) => {
        const res = await axios.post('/users/add-fixed-cost', {budget_id: budget._id, fixed_cost: fixed_cost})
        return res.data
    },
    deleteFixedCost: async (budget, fixed_cost_id) => {
        const res = await axios.post('/users/delete-fixed-cost', {budget_id: budget._id, fixed_cost_id: fixed_cost_id})
        return res.data
    },
    addVariableCost: async (budget, variable_cost) => {
        const res = await axios.post('/users/add-variable-cost', {budget_id: budget._id, variable_cost: variable_cost})
        return res.data
    },
    deleteVariableCost: async (budget, variable_cost_id) => {
        const res = await axios.post('/users/delete-variable-cost', {budget_id: budget._id, variable_cost_id: variable_cost_id})
        return res.data
    },
    addFutureCost: async (budget, future_cost) => {
        const res = await axios.post('/users/add-future-cost', {budget_id: budget._id, future_cost: future_cost})
        return res.data
    },
    deleteFutureCost: async (budget, future_cost_id) => {
        const res = await axios.post('/users/delete-future-cost', {budget_id: budget._id, future_cost_id: future_cost_id})
        return res.data
    },
    addIncome: async (budget, income) => {
        const res = await axios.post('/users/add-income', {budget_id: budget._id, income: income})
        return res.data
    },
    deleteIncome: async (budget, income_id) => {
        const res = await axios.post('/users/delete-income', {budget_id: budget._id, income_id: income_id})
        return res.data
    },
    addBankAccount: async (budget, bank_account) => {
        const res = await axios.post('/users/add-bank-account', {budget_id: budget._id, bank_account: bank_account})
        return res.data
    },
    deleteBankAccount: async (budget, bank_account_id) => {
        const res = await axios.post('/users/delete-bank-account', {budget_id: budget._id, bank_account_id: bank_account_id})
        return res.data
    }
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}))

export default function Accounting(props) {
    const { user } = props

    const classes = useStyles()
    const [addBudgetDialog, setAddBudgetDialog] = React.useState(false)
    const [fixedCostsDialog, setFixedCostsDialog] = React.useState(false)
    const [variableCostsDialog, setVariableCostsDialog] = React.useState(false)
    const [futureCostsDialog, setFutureCostsDialog] = React.useState(false)
    const [incomesDialog, setIncomesDialog] = React.useState(false)
    const [bankAccountsDialog, setBankAccountsDialog] = React.useState(false)
    const [state, setState] = React.useState()
    const [addFixedCostDialog, setAddFixedCostDialog] = React.useState(false)
    const [addVariableCostDialog, setAddVariableCostDialog] = React.useState(false)
    const [addFutureCostDialog, setAddFutureCostDialog] = React.useState(false)
    const [addIncomeDialog, setAddIncomeDialog] = React.useState(false)
    const [addBankAccountDialog, setAddBankAccountDialog] = React.useState(false)
    const [date, setDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))
    const [workingDays, setWorkingDays] = React.useState(props.budget.working_days)
    const [budgetName, setBudgetName] = React.useState(props.budget ? props.budget.name : '')

    // Handle budget selection
    const handleSelectBudget = (e) => {
        // props.setBudget(e.target.value)
        // console.log(e.target.value.name)
        // setBudgetName(e.target.value.name)
        props.update(e.target.value)
    }

    const selectDate = (e) => {
        setDate(e.target.value)
    }

    const handleAddFixedCostDialog = () => {
        setAddFixedCostDialog(!addFixedCostDialog)
    }

    const handleAddVariableCostDialog = () => {
        setAddVariableCostDialog(!addVariableCostDialog)
    }

    const handleAddFutureCostDialog = () => {
        setAddFutureCostDialog(!addFutureCostDialog)
    }

    const handleAddIncomeDialog = () => {
        setAddIncomeDialog(!addIncomeDialog)
    }

    const handleAddBankAccountDialog = () => {
        setAddBankAccountDialog(!addBankAccountDialog)
    }

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value})
    } 

    const handleAddBudgetDialog = () => {
        setAddBudgetDialog(!addBudgetDialog)
    }

    const handleFixedCostsDialog = () => {
        setFixedCostsDialog(!fixedCostsDialog)
    }

    const handleVariableCostsDialog = () => {
        setVariableCostsDialog(!variableCostsDialog)
    }

    const handleFutureCostsDialog = () => {
        setFutureCostsDialog(!futureCostsDialog)
    }

    const handleIncomesDialog = () => {
        setIncomesDialog(!incomesDialog)
    }

    const handleBankAccountsDialog = () => {
        setBankAccountsDialog(!bankAccountsDialog)
    }

    const addBudget = () => {
        let { budgets, success } = accounting.addBudget(state.name).then(() => {
            props.authUser()
            handleAddBudgetDialog()
        })
    }

    const deleteBudget = () => {
        let { budgets, success } = accounting.deleteBudget(props.budget._id).then(() => {
            props.update(user.budgets[0])
        })
    }

    const addFixedCost = async () => {
        const {
            due_day,
            amount,
            from,
            to,
            frequency,
            notes
        } = state
        let fixed_cost = {
            due_day,
            amount,
            from,
            to,
            frequency,
            notes
        }
        await accounting.addFixedCost(props.budget, fixed_cost)
        props.update(props.budget)
        handleAddFixedCostDialog()
    }

    const deleteFixedCost = async (fixed_cost_id) => {
        for (let i = 0; i < fixed_cost_id.length; i++) {
            await accounting.deleteFixedCost(props.budget, fixed_cost_id[i])
            props.update(props.budget)
        }
    }

    const addVariableCost = async () => {
        const {
            amount,
            from,
            to,
            notes,
            label
        } = state
        let variable_cost = {
            date: date,
            amount,
            from,
            to,
            notes,
            label
        }
        await accounting.addVariableCost(props.budget, variable_cost)
        props.update(props.budget)
        handleAddVariableCostDialog()
    }

    const deleteVariableCost = async (variable_cost_id) => {
        for (let i = 0; i < variable_cost_id.length; i++) {
            await accounting.deleteVariableCost(props.budget, variable_cost_id[i])
            props.update(props.budget)
        }
    }

    const addFutureCost = async () => {
        const {
            amount,
            from,
            to,
            notes,
            label
        } = state
        let future_cost = {
            date: date,
            amount,
            from,
            to,
            notes,
            label
        }
        await accounting.addFutureCost(props.budget, future_cost)
        props.update(props.budget)
        handleAddFutureCostDialog()
    }

    const deleteFutureCost = async (future_cost_id) => {
        for (let i = 0; i < future_cost_id.length; i++) {
            await accounting.deleteFutureCost(props.budget, future_cost_id[i])
            props.update(props.budget)
        }
    }

    const addIncome = async () => {
        const {
            amount,
            from,
            to,
            notes
        } = state
        let income = {
            date: date,
            amount,
            from,
            to,
            notes
        }
        await accounting.addIncome(props.budget, income)
        props.update(props.budget)
        handleAddIncomeDialog()
    }

    const deleteIncome = async (income_id) => {
        for (let i = 0; i < income_id.length; i++) {
            await accounting.deleteIncome(props.budget, income_id[i])
            props.update(props.budget)
        }
    }

    const addBankAccount = async () => {
        const {
            amount,
            from,
            bank_name,
            notes
        } = state
        let bank_account = {
            date: date,
            amount,
            from,
            bank_name,
            notes
        }
        await accounting.addBankAccount(props.budget, bank_account)
        props.update(props.budget)
        handleAddBankAccountDialog()
    }

    const deleteBankAccount = async (bank_account_id) => {
        for (let i = 0; i < bank_account_id.length; i++) {
            await accounting.deleteBankAccount(props.budget, bank_account_id[i])
            props.update(props.budget)
        }
    }

    // select working_days from grid list
    const handleSelect = (value) => async () => {
        const currentIndex = workingDays.indexOf(value)
        const newWorkingDays = [...workingDays]

        if (currentIndex === -1) {
            newWorkingDays.push(value)
        } else {
            newWorkingDays.splice(currentIndex, 1)
        }
        setWorkingDays(newWorkingDays)
        let working_days = newWorkingDays
        await accounting.editBudget(props.budget, working_days)
        props.update(props.budget)
    }
    return (
        <div>
            <AddBudgetDialog
                open={addBudgetDialog}
                handleChange={handleChange}
                addBudget={addBudget}
                onClose={handleAddBudgetDialog}
            />
            <FixedCostsDialog
                open={fixedCostsDialog}
                onClose={handleFixedCostsDialog}
                budget={props.budget}
                addFixedCost={addFixedCost}
                handleChange={handleChange}
                authUser={props.authUser}
                addFixedCostDialog={addFixedCostDialog}
                handleAddFixedCostDialog={handleAddFixedCostDialog}
                deleteFixedCost={deleteFixedCost}
            />
            <VariableCostsDialog
                open={variableCostsDialog}
                onClose={handleVariableCostsDialog}
                budget={props.budget}
                addVariableCost={addVariableCost}
                handleChange={handleChange}
                authUser={props.authUser}
                addVariableCostDialog={addVariableCostDialog}
                handleAddVariableCostDialog={handleAddVariableCostDialog}
                deleteVariableCost={deleteVariableCost}
                date={date}
                selectDate={selectDate}
            />
            <FutureCostsDialog
                open={futureCostsDialog}
                onClose={handleFutureCostsDialog}
                budget={props.budget}
                addFutureCost={addFutureCost}
                handleChange={handleChange}
                authUser={props.authUser}
                addFutureCostDialog={addFutureCostDialog}
                handleAddFutureCostDialog={handleAddFutureCostDialog}
                deleteFutureCost={deleteFutureCost}
                date={date}
                selectDate={selectDate}
            />
            <IncomesDialog
                open={incomesDialog}
                onClose={handleIncomesDialog}
                budget={props.budget}
                addIncome={addIncome}
                handleChange={handleChange}
                authUser={props.authUser}
                addIncomeDialog={addIncomeDialog}
                handleAddIncomeDialog={handleAddIncomeDialog}
                deleteIncome={deleteIncome}
                date={date}
                selectDate={selectDate}
            />
            <BankAccountsDialog
                open={bankAccountsDialog}
                onClose={handleBankAccountsDialog}
                budget={props.budget}
                addBankAccount={addBankAccount}
                handleChange={handleChange}
                authUser={props.authUser}
                addBankAccountDialog={addBankAccountDialog}
                handleAddBankAccountDialog={handleAddBankAccountDialog}
                deleteBankAccount={deleteBankAccount}
                date={date}
                selectDate={selectDate}
            />
            {user
            ? (<div>
                <Grid container direction="column">
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Budget</InputLabel>
                            <Select
                                id="select-budget"
                                value={budgetName}
                                onChange={handleSelectBudget}
                            >
                                {user.budgets.map((budget) => (
                                    <MenuItem key={budget._id} value={budget}>{budget.name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <Button
                            onClick={handleAddBudgetDialog}
                        >Add a budget</Button>
                        {props.budget
                        ? <div>                            
                            {props.budget.name}
                            <Button
                                onClick={deleteBudget}
                            >Delete</Button></div>
                        : null}
                    </Grid>
                    <Grid item>
                        {props.budget
                        ? <div><CheckBoxGridList
                                data={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                                checked={props.budget.working_days ? props.budget.working_days : ['']}
                                handleSelect={handleSelect}
                            /></div>
                        : null}                        
                    </Grid>
                    <Grid item container direction="column">                        
                        {props.budget
                        ? <div>
                            <Grid item container spacing={1} direction="column">
                                <Grid item container spacing={1}>
                                    <Grid item>
                                        To earn: {props.budget.to_earn}
                                    </Grid>
                                    <Grid item>
                                        To save: {props.budget.to_save}
                                    </Grid>
                                    <Grid item>
                                        Net worth: {props.budget.net_worth}
                                    </Grid>
                                    <Grid item>
                                        APY: {props.budget.APY}
                                    </Grid>
                                    <Grid item>
                                        spendable: {props.budget.spendable}
                                    </Grid>
                                    <Grid item>
                                        goal: {props.budget.goal}
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={1}>
                                    <Grid item>
                                        Net worth needed: {props.budget.net_worth_needed}
                                    </Grid>
                                    <Grid item>
                                        Net worth missing: {props.budget.net_worth_missing}
                                    </Grid>
                                    <Grid item>
                                        Time: {props.budget.time}
                                    </Grid>                                    
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={handleFixedCostsDialog}
                                >Fixed Costs {props.budget.tot_fixed_costs}</Button>
                                <Button
                                    onClick={handleVariableCostsDialog}
                                >Variable Costs {props.budget.tot_variable_costs}</Button>
                                <Button
                                    onClick={handleFutureCostsDialog}
                                >Future Costs {props.budget.tot_future_costs}</Button>
                                <Button
                                    onClick={handleIncomesDialog}
                                >Incomes {props.budget.tot_incomes}</Button>
                                <Button
                                    onClick={handleBankAccountsDialog}
                                >Bank accounts {props.budget.tot_bank_accounts}</Button>
                            </Grid>
                            </div>
                        : <div>Select a budget to see details</div>}
                    </Grid>
                </Grid></div>)
            : (<div>Loading . . .</div>)}            
        </div>
    )
}
