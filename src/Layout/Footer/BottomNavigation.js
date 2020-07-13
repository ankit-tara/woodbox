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
import { Link } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";


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
    },
    '& a': {
      color: '#908e8e'
    }
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const accessToken = useSelector((state) => state.auth_user.accessToken);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeRoundedIcon />}/>
      <BottomNavigationAction component={Link} href="/products/type/buy" label="Buy" icon={<LocalMallRoundedIcon />} />
      <BottomNavigationAction component={Link} href="/events" label="Events" icon={<EventNoteRoundedIcon />} />
      <BottomNavigationAction component={Link} href="/profile" label="My ads" icon={<LiveTvRoundedIcon />} />
      {! accessToken && (
      <BottomNavigationAction label="Login" icon={<AuthIcon isMobile={true} />} />
      )}
    </BottomNavigation>
  );
}