import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Dialog } from "@material-ui/core";
import { commonStyles, desktopStyles, mobileStyles } from "./styles";
import Link from "next/link";
import ConnectyCube from "connectycube";
import { useSelector, useDispatch } from "react-redux";
import store from "../../redux/store";
import PageLoader from "../PageLoader";
import { fetchDialogs } from "../../apis/chat-api";
import DialogBox from "./DialogBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import dialogs from "../../redux/reducers/dialogs";
import { selectedDialog } from "../../redux/actions/selectedDialog";
import ChatBox from "./ChatBox";
import useSocket from '../../Utils/useSocket'
const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("sm")]: desktopStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

const Chat = ({ type, id }) => {
  const selectedDialogVal = useSelector((state) => state.selectedDialog);
  // const user = useSelector((state) => state.auth_user.user);

  const [Dialogs, setDialogs] = useState([]);
  const [data, setdata] = useState([]);
  const [open, setOpen] = React.useState(true);
  const [loader, setloader] = React.useState(true);
  const [dialogLoader, setdialogLoader] = React.useState(false);
  const user = useSelector((state) => state.auth_user.user);
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    getDialogs(type, id);
    if (socket && user) {
      socket.on(`message.chat${user.id}`, message => {
        console.log('message', message)
      });
    }

    // this.socket = io()
  }, [type, id, socket, user]);

  const getDialogs = (type, id) => {
    let count = 1;
    if (data && data.current_page) {
      count = data.current_page + 1;
    }
    let q = `?page=${count}`;
    fetchDialogs(user.id, q).then((data) => {
      let dialogs = Dialogs.concat(data.data);
      setDialogs(dialogs);
      setdata(data);
      setloader(false);
      setdialogLoader(false)
    });
  };

  const gotoChat = () => {
    setOpen(false);
  };

  const goBack = () => {
    setOpen(true);
  };

  const handleDialogsSCroll = (e) => {
    if (!Dialogs.length || data.current_page == data.last_page) {
      return;
    }
    let target = e.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setdialogLoader(true)
      getDialogs();
    }
  };

  const selectDialog = (dialog) => {
    dispatch(selectedDialog(dialog))
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <PageLoader loading={loader} />
      <div className="container">
        <div className={open == true ? "left" : "active left"}>
          <div className="top">
            <Typography variant="h4">Messages (2 )</Typography>
            {/* <input type="text" placeholder="Search" />
                <a href="javascript:;" className="search"></a> */}
          </div>
          <ul className="people" onScroll={handleDialogsSCroll}>
            {Dialogs &&
              Dialogs.length > 0 &&
              Dialogs.map((dialog) => (
                <DialogBox
                  dialog={dialog}
                  key={dialog.id}
                  auth={user}
                  selectDialog={selectDialog}
                />
              ))}
            {dialogLoader && (
              <div class="dialog-loader">
                <CircularProgress color="primary" size={20} />
              </div>
            )}
          </ul>
        </div>
        {selectedDialogVal && (
          <ChatBox selectedDialogVal={selectedDialogVal} auth={user} />
        )}
        {!selectedDialogVal && (
          <div className="right">
            <div className="top"></div>
            <div className="chat">
              <div className="emptyDialog">
                <Typography >
                  Please select a dialog to start chat
                </Typography>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
