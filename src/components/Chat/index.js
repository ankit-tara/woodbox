import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { commonStyles, desktopStyles, mobileStyles } from "./styles";
import Link from "next/link";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ConnectyCube from "connectycube";
import { useSelector } from "react-redux";
import store from "../../redux/store";


const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("sm")]: desktopStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

const Chat = () => {
  const Dialogs = store.getState().dialogs

  console.log('chat dialogs', Dialogs);

  const [open, setOpen] = React.useState(true);

  const gotoChat = () => {
    setOpen(false);
  };

  const goBack = () => {
    setOpen(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={open == true ? "left" : "active left"}>
          <div className="top">
            <Typography variant="h4">Messages (2 )</Typography>
            {/* <input type="text" placeholder="Search" />
                <a href="javascript:;" className="search"></a> */}
          </div>
          <ul className="people">
            <li onClick={gotoChat} className="person">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg"
                alt=""
              />
              <span className="name">Thomas Bangalter</span>
              <span className="time">2:09 PM</span>
              <span className="preview">I was wondering...</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="top">
            <KeyboardBackspaceIcon
              className={classes.backBtn}
              onClick={goBack}
            />
            <span>
              To: <span className="name">Dog Woofson</span>
            </span>
          </div>
          <div className="chat">
            <div className="conversation-start">
              <span>Today, 5:38 PM</span>
            </div>
            <div className="bubble you">Hello, can you hear me?</div>
            <div className="bubble you">I'm in California dreaming</div>
            <div className="bubble me">... about who we used to be.</div>
            <div className="bubble me">Are you serious?</div>
            <div className="bubble you">I'm in California dreaming</div>
            <div className="bubble me">... about who we used to be.</div>
            <div className="bubble me">Are you serious?</div>
            <div className="bubble you">When we were younger and free...</div>
            <div className="bubble you">I've forgotten how it felt before</div>
          </div>
          <div className="write">
            <a href="javascript:;" className="write-link attach"></a>
            <input type="text" />
            <a href="javascript:;" className="write-link smiley"></a>
            <a href="javascript:;" className="write-link send"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
