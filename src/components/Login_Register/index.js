import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AuthForm } from "./AuthForm";

const useStyles = makeStyles((theme) => ({
  // form: {
  //   // display: "grid",
  //   // gridTemplateColumns: "1fr 1fr",
  //   // gridGap: "1rem",
  //   [theme.breakpoints.down("sm")]: {
  //     gridTemplateColumns: "1fr",
  //   },
  // },
  // modal: {
  //   padding: "0.5rem",
  // },
}));

const Login_Register = () => {
  const [open, setopen] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const openModal = () => {
    setopen(true);
  };

  const closeModal = () => {
    setopen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <AccountCircleIcon onClick={openModal} />
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
            <div>
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
