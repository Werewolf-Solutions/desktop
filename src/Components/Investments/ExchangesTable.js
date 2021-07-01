import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import AddBot from './AddBot';
import BalanceDialog from './BalanceDialog';
import Loading from '../Layout/Loading';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ExchangesTable(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [balanceOpen, setBalanceOpen] = React.useState(false);
  const [state, setState] = React.useState();

  const [exchange, setExchange] = React.useState();

  const handleChange = (e) => {
    setState({...state, [e.target.id]: e.target.value});
  }

  const handleClickOpen = (exchange) => {
    setOpen(true);
    setExchange(exchange);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBalanceDialog = () => {
    setBalanceOpen(!balanceOpen);
  }

  const deleteExchange = async (exchange) => {
    const res = await axios.post('/users/delete-exchange', exchange);
    console.log(res.data);
    props.authUser();
  }

  return (
    <div>
      <AddBot
        open={open}
        handleClose={handleClose}
        exchange={exchange}
      />      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Exchanges</TableCell>
              <TableCell align="right">Balances</TableCell>
              <TableCell align="right">Active bots</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.user.exchanges ? props.user.exchanges.map((exchange) => (
            <TableRow key={exchange.name}>
              <TableCell component="th" scope="row">
                {exchange.name}
              </TableCell>
              <TableCell align="right">
              <BalanceDialog
                open={balanceOpen}
                onClose={handleBalanceDialog}
                account={exchange.account}
              />
                <Button
                  onClick={handleBalanceDialog}
                >Balance</Button>
              </TableCell>
              <TableCell align="right">{exchange.activeBot}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleClickOpen(exchange)}
                >add bot</Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => deleteExchange(exchange)}
                >delete exchange</Button>
              </TableCell>
            </TableRow>            
          )) : <Loading />}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}