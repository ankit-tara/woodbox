import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AuthIcon from "../../components/Login_Register";
import { Link } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 2,
    background: "#fdfdfd",
    boxShadow: "0px -3px 20px rgba(0,0,0,0.1)",
    "& button": {
      minWidth: "60px",
      padding: "6px 10px 8px",
    },
    "& a": {
      color: "#908e8e",
    },
    "& a.active": {
      color: "#FD8118",
    },
  },
});



export default function SimpleBottomNavigation() {
  const router = useRouter();
  const classes = useStyles();
  
  const [value, setValue] = useState('0');
  useEffect(() => {
        setValue(localStorage.getItem("botMenu"));
  });

  const accessToken = useSelector((state) => state.auth_user.accessToken);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        localStorage.setItem("botMenu", newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        href="/"
        label="Home"
        className={router.pathname == "/" ? "active" : ""}
        icon={<HomeRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        href="/products?type=buy"
        label="Buy"
        className={router.pathname == "/products?type=buy" ? "active" : ""}
        icon={<LocalMallRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        href="/events"
        label="Events"
        className={router.pathname == "/events" ? "active" : ""}
        icon={<EventNoteRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        href="/profile"
        label="My ads"
        className={router.pathname == "/profile" ? "active" : ""}
        icon={<LiveTvRoundedIcon />}
      />
      {!accessToken && (
        <BottomNavigationAction
          label="Login"
          icon={<AuthIcon isMobile={true} />}
        />
      )}
    </BottomNavigation>
  );
}
