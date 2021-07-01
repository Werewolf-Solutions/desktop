import React, { Component } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText    
} from '@material-ui/core';
import {
    Home,
    Dashboard,
    TrendingUp,
    AccountBalanceWallet,
    Settings,
} from '@material-ui/icons';

const list = [
    'HOME',
    'DASHBOARD',
    'INVESTMENTS',
    'ACCOUNTING',
    'SETTINGS',
]

function MenuDrawerList(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        props.setSelected(list[index]);
        props.onClose();
    };
    return(
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <TrendingUp />
                    </ListItemIcon>
                    <ListItemText primary="Investments" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <AccountBalanceWallet />
                    </ListItemIcon>
                    <ListItemText primary="Accouting" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>                 
            </List>
        </div>
    )
}

export default class MenuDrawer extends Component {
    render() {
        return(
            <div>
                <Drawer
                    anchor={this.props.anchor}
                    open={this.props.open}
                    onClose={this.props.onClose}
                >
                    <MenuDrawerList
                        setSelected={this.props.setSelected}
                        onClose={this.props.onClose}
                    />
                </Drawer>
            </div>
        )
    }    
}