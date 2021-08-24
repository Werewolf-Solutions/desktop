import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Button,
  IconButton
} from '@material-ui/core';
import {
  Delete
} from '@material-ui/icons'
import BalanceDialog from '../BalanceDialog';

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

  return (
    <div>     
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Exchanges</TableCell>
              <TableCell >Active bots</TableCell>
              <TableCell >Balances</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.exchanges.map((exchange) => (
            <TableRow key={exchange.name}>
              <TableCell component="th" scope="row">
                {exchange.name}
              </TableCell>
              <TableCell >{exchange.activeBot}</TableCell>
              <TableCell >
              <BalanceDialog
                open={balanceOpen}
                onClose={handleBalanceDialog}
                account={exchange.account}
              />
                <Button
                  onClick={handleBalanceDialog}
                >Balance</Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => props.showBotsLogs(exchange)}
                >Show bots logs</Button>
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => props.deleteExchange(exchange)}
                ><Delete /></IconButton>
              </TableCell>
            </TableRow>            
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}