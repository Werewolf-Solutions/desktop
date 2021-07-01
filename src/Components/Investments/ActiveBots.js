import React from 'react';
import {
    makeStyles,
    Switch,
    ListItemSecondaryAction
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ActiveBots(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
        {props.bots.map((bot) => (
            <ListItem key={bot.id}>
                <ListItemText
                    primary={'Strategy: ' + bot.strategy}
                    secondary={'status: ' + bot.status}
                />
                <ListItemSecondaryAction>
                <Switch
                    edge="end"
                    onChange={handleToggle(bot.id)}
                    checked={checked.indexOf(bot.id) !== -1}
                    inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
  );
}