import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AuthForm } from "./AuthForm";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { unauthenticated } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#ffffff",
      background: "#f5811a",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-textColorPrimary": {
      background: "#dfdfdf",
    },
    "& .MuiButton-containedPrimary": {
      marginTop: "1rem",
    },
  },
  Login: {
    position: "relative",
    marginTop: "5rem",
    "&::before": {
      top: "0",
      left: "0",
      width: "440px",
      height: "440px",
      content: '""',
      zIndex: "-1",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      background: "url(/static/images/circleCenter.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.down("sm")]:{
      marginTop: '3rem'
    }
  },
  Img: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]:{
      '& img':{
        height: '65px'
      }
    }
  },
  orange: {
    color: "#fff",
    backgroundColor: "#f5811a",
    width: "30px",
    height: "30px",
    fontSize: "1rem",
  },
  transparent: {
    color: "#000",
    width: "30px",
    height: "30px",
    backgroundColor: "transparent",
  },
}));

const Login_Register = ({ isMobile = false, modalOpen = false }) => {
  const [open, setopen] = useState(false);
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.search.indexOf("signup=open") != -1) {
      setopen(true);
    } else if (modalOpen != open) {
      setopen(modalOpen);
    }
  }, [modalOpen]);

  const accessToken = useSelector((state) => state.auth_user.accessToken);
  const user = useSelector((state) => state.auth_user.user);
  // console.log("User", user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const openModal = (event) => {
    if (!accessToken) {
      setopen(true);
    } else {
      if (isMobile) {
        gotoProfile();
      } else {
        setAnchorEl(event.currentTarget);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeModal = () => {
    setopen(false);
  };

  const gotoProfile = () => {
    router.push("/profile");
  };
  const gotoProfileEdit = () => {
    router.push("/profile/edit");
  };
  const gotoEvents = () => {
    router.push("/profile/events");
  };
  const gotoRequeste = () => {
    router.push("/profile/requests");
  };
  const gotoFavEvents = () =>{
    router.push("/profile/favourite-events");
  };
  const gotoFavProducts = () =>{
    router.push("/profile/favourite-products");
  };
  const gotoAddRequest = () =>{
    router.push("/post/request");
  };
  const gotoResetPassword = () => {
    router.push("/profile/reset-password");
  }
  

  const logout = () => {
    setAnchorEl(null);
    router.push("/");
    dispatch(unauthenticated());
  };

  const classes = useStyles();

  return (
    <div>
      <Avatar
        onClick={openModal}
        aria-controls="auth-menu"
        aria-haspopup="true"
        className={user.first_name ? classes.orange : classes.transparent}
      >
        {user.first_name ? user.first_name.charAt(0) : <AccountCircleIcon />}
      </Avatar>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={gotoProfile}>View Profile</MenuItem>
        <MenuItem onClick={gotoProfileEdit}>Edit Profile</MenuItem>
        <MenuItem onClick={gotoResetPassword}>Reset Password</MenuItem>
        <MenuItem onClick={gotoProfile}>Published Ads</MenuItem>
        <MenuItem onClick={gotoEvents}>Published Events</MenuItem>
        <MenuItem onClick={gotoRequeste}>Published Requests</MenuItem>
        <MenuItem onClick={gotoFavEvents}>Favourite Events</MenuItem>
        <MenuItem onClick={gotoFavProducts}>Favourite Products</MenuItem>
        <MenuItem onClick={gotoAddRequest}>Add Product Request</MenuItem>
        
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
        className={classes.modal}
      >
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Login" />
            <Tab label="SignUp" />
          </Tabs>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <div className={classes.Login}>
              <div className={classes.Img}>
                <img src="/static/images/logo.png" />
              </div>
              <AuthForm type="login" />
            </div>
            <div>
              <AuthForm type="signup" />
            </div>
          </SwipeableViews>
        </div>
      </Dialog>
    </div>
  );
};

export default Login_Register;
