import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Typography,
  makeStyles  
} from '@material-ui/core';
import {
  Menu,
} from '@material-ui/icons';
import MenuDrawer from './MenuDrawer';
import HeaderIn from './HeaderIn';
import HeaderOut from './HeaderOut';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({  
  appBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
    const classes = useStyles();    
    return (
        <div className={classes.appBar}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={1}>
                        {props.signedIn ?
                        (<Grid item>
                            <IconButton 
                                onClick={props.toggleDrawer}
                            >
                                <Menu />
                            </IconButton>
                        </Grid>
                        ): null}
                        <Grid item>
                            <Logo />
                        </Grid>
                        {props.signedIn ?
                            (<Grid item>
                                <HeaderIn
                                    authUser={props.authUser}
                                />
                            </Grid>)
                            :
                            (<Grid item>
                                <HeaderOut
                                    authUser={props.authUser}
                                />
                            </Grid>)
                        }
                        {props.eth_account === undefined ?
                        (<Grid item>
                            <Button onClick={props.connectMetamask}>Connect Metamask</Button>
                        </Grid>)
                        :
                        (<Grid item>
                            <Typography>{props.eth_account.address}</Typography>
                        </Grid>)}
                        <Grid item>
                            <InputLabel id="theme">Theme</InputLabel>
                            <Select
                                labelId="select-theme"
                                id="select-theme"
                                value={props.theme}
                                onChange={props.handleChangeTheme}
                            >
                                <MenuItem value={'dark'}>Dark</MenuItem>
                                <MenuItem value={'light'}>Light</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </AppBar>
            <MenuDrawer
                open={props.drawer}
                onClose={props.toggleDrawer}
                setSelected={props.setSelected}
            />
        </div>
    );
}