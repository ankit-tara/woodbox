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

const Chat = ({ type = '', id = '' }) => {
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
    if (!Dialogs.length) {
      getDialogs(type, id);
    }
  }, [type, id, user]);

  const getDialogs = (type, id) => {
    let count = 1;
    if (data && data.current_page >= data.last_page) {
      return
    }
    if (data && data.current_page) {
      count = data.current_page + 1;
    }
    let q = `?page=${count}`;
    if (type, id) {
      q += `&type=${type}&id=${id}`;
    }
    fetchDialogs(user.id, q).then((data) => {
      let dialogs = Dialogs.concat(data.data);
      setDialogs(dialogs);
      setdata(data);
      setloader(false);
      setdialogLoader(false)
      if (!selectedDialogVal && dialogs.length) {
        selectDialog(dialogs[0])
      }
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
    setOpen(false);
    clearUnread(dialog.id)
    dispatch(selectedDialog(dialog))

  };

  const clearUnread = (id) => {
    let dialogs = Dialogs.map(item => {
      if (item.id == id) {
        item.unread_messages_count = 0
      }
      return item
    })
    // setDialogs([])
    setDialogs(dialogs)
  }

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
            {
              Dialogs.map((dialog) => (

                <>
                  <DialogBox
                    dialog={dialog}
                    key={dialog.id}
                    auth={user}
                    selectDialog={selectDialog}
                    unread_messages_count={dialog.unread_messages_count ? dialog.unread_messages_count : ''}
                  />
                </>
              ))}
            {dialogLoader && (
              <div class="dialog-loader">
                <CircularProgress color="primary" size={20} />
              </div>
            )}
          </ul>
        </div>
        {selectedDialogVal && (
          <ChatBox clearUnread={clearUnread} selectedDialogVal={selectedDialogVal} auth={user} goBack={goBack} />
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
