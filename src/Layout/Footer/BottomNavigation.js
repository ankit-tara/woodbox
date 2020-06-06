import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AuthIcon from "../../components/Login_Register";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 2,
    background: '#fdfdfd',
    boxShadow: '0px -3px 20px rgba(0,0,0,0.1)',
    '& button': {
      minWidth: '60px',
      padding: '6px 10px 8px'
    }

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Buy" icon={<LocalMallRoundedIcon />} />
      <BottomNavigationAction label="Events" icon={<EventNoteRoundedIcon />} />
      <BottomNavigationAction label="My ads" icon={<LiveTvRoundedIcon />} />
      <BottomNavigationAction label="Account" icon={<AuthIcon isMobile={true} />} />
    </BottomNavigation>
  );
}