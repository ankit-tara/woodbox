import React, { useEffect, useState, useRef } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";
import { commonStyles, desktopStyles, tabStyles, mobileStyles } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createMessage, fetchMessages, readAll } from "../../apis/chat-api";
import dialogs from "../../redux/reducers/dialogs";
import Message from "./Message";
import { AddToPhotosSharp } from "@material-ui/icons";
import moment from 'moment'
import { Typography } from "@material-ui/core";
import ConnectyCube from "connectycube";

import { useSelector, useDispatch } from 'react-redux';
import { deleteAllMessages, pushMessage, setMessages } from "../../redux/actions/messages";
import useSocket from "../../Utils/useSocket";
import Messages from "./Messages";
import { selectedDialog } from "../../redux/actions/selectedDialog";

const useStyles = makeStyles((theme) => ({
    ...commonStyles,
    [theme.breakpoints.up("sm")]: desktopStyles,
    [theme.breakpoints.up("md")]: tabStyles,
    [theme.breakpoints.down("sm")]: mobileStyles,
}));
const ChatBox = ({ selectedDialogVal, auth, goBack, dialogsArr }) => {
    const classes = useStyles();
    const [loading, setloading] = useState(true);
    const [prevdialog, setprevdialog] = useState({});
    const [data, setdata] = useState({});
    const [page, setpage] = useState(0);
    const [userMsg, setuserMsg] = useState('');
    const msgs = useSelector((state) => state.messages);
    const socket = useSocket()
    // const [msgs, setmsgs] = useState([]);
    const [user, setuser] = useState("");
    const [title, settitle] = useState("");
    const [link, setlink] = useState("");
    const [chatType, setchatType] = useState("");
    const [connected, setconnected] = useState(false);

    const dispatch = useDispatch();

    const chatBoxREf = useRef('')

    useEffect(() => {

        if (!selectedDialogVal.id) {
            setloading(false)
            setuser('')
            settitle('');
            setlink('');
            setpage(0)
            return
        }
        // if (prevdialog.id != selectedDialogVal.id) {
        // setloading(false);
        // setloading(true);

        setprevdialog(selectedDialogVal)
        getMessages();
        // }
        let dialog = selectedDialogVal;
        if (dialog && dialog.users.length) {
            let user = dialog.users.filter((item) => item.user.id != auth.id);
            setuser(user[0].user);
        }
        if (dialog && dialog.related_data) {
            let type = dialog.related;
            let related_data = dialog.related_data;

            let link = `products/item/${related_data.id}`
            if (type == "event") {
                link = `events/item/${related_data.id}`
            }

            settitle(related_data.title);
            setlink(link);
        }
        if (socket && auth && !connected) {
            socket.on(`message.chat${auth.id}`, message => {
                handleNewMsg(message)

            });
            setconnected(true)
        }


    }, [selectedDialogVal, socket]);

    const handleNewMsg = (message) => {
        // if (message.data && message.data.dialog_id == selectedDialogVal.id) {
        dispatch(pushMessage(message.data))
        //     console.log('message2', message.data.dialog_id == selectedDialogVal.id)
        //     // setmsgs(msgs.concat([message.data]))
        // }
        // console.log('message', message, selectedDialogVal)
    }

    const getMessages = () => {

        let count = page + 1
        // return
        const dialogId = selectedDialogVal.connecty_dialog_id;
        let skip = (count - 1) * 10
        const params = {
            chat_dialog_id: dialogId,
            sort_desc: "date_sent",
            limit: 10,
            skip: skip
        };
        ConnectyCube.chat.message
            .list(params)
            .then(messages => {


                if (messages.items.length) {
                    let newMsgs = messages.items.reverse().concat(msgs.messages)
                    setTimeout(() => {
                        scrollToBottom(!msgs.messages.length ? '' : 30)
                    }, 200);
                    dispatch(setMessages(newMsgs, selectedDialogVal))
                    setpage(count)

                } else {
                    if (count == 1) {
                        setuserMsg(selectedDialogVal.related == 'product' ? 'Do you still have this product?' : '')
                    }
                    setpage(-1)

                }


            })
            .catch(error => {
            });
    }

    // const getMessages = (data, msgs = []) => {
    //     // return
    //     if (!msgs.length) {
    //         dispatch(deleteAllMessages())

    //     }

    //     let count = 1;
    //     if (data && data.current_page) {
    //         count = data.current_page + 1;
    //     }
    //     let q = `?page=${count}`;
    //     let dialog = selectedDialogVal;
    //     if (!dialog) {
    //         setloading(false);
    //         return;
    //     }

    //     fetchMessages(dialog.id, q).then((data) => {
    //         if (data && data.data) {
    //             let newMsgs = data.data.reverse()
    //             let msgData = newMsgs.concat(msgs);
    //             dispatch(setMessages(msgData, selectedDialogVal))
    //             console.log('testcount', count, msgData.length, selectedDialogVal.related)
    //             if (count == 1 && !msgData.length) {
    //                 setuserMsg(selectedDialogVal.related == 'product' ? 'Do you still have this product?' : '')
    //             }
    //             // setmsgs(msgData);
    //             setdata(data);
    //         }


    //         if (!msgs.length) {
    //             setTimeout(() => {

    //                 scrollToBottom()

    //             }, 200);
    //         } else {
    //             scrollToBottom(30)
    //         }

    //         // readAll(dialog.id, auth.id).then(data => console.log(data))


    //     });
    // };

    const scrollToBottom = (height = '') => {
        setloading(false);
        if (!chatBoxREf || !chatBoxREf.current) {
            return
        }

        chatBoxREf.current.scrollTop = height ? height : chatBoxREf.current.scrollHeight
        // chatBoxREf.current.scrollTop = chatBoxREf.current.scrollHeight

    }

    const handleChatBoxScroll = (e) => {
        let target = e.target;
        if (!msgs.messages.length || page < 0) {
            return;
        }
        if (!target.scrollTop) {

            // setdialogLoader(true)
            // getDialogs();
            getMessages()
        }
    }

    const sendMsg = (e) => {
        e.preventDefault()
        if (!userMsg) {
            return
        }
        let dialog = selectedDialogVal
        const date = Math.floor(Date.now() / 1000)
        let message = {
            type: "groupchat",
            body: userMsg,
            message: userMsg,
            dialog_id: dialog.connecty_dialog_id,
            extension: {
                save_to_history: 1,
                dialog_id: dialog.connecty_dialog_id,
                // sender_id: '2066645',
                sender_id: auth.connectycube_user.connectycube_id,
                date_sent: date,
            },
            markable: 1
        };
        dispatch(pushMessage(message))

        // setmsgs(msgs.concat([data]))
        setuserMsg('')
        message.id = ConnectyCube.chat.helpers.getBsonObjectId()

        message = ConnectyCube.chat.send(dialog.xmpp_room_jid, message);
        setTimeout(() => {

            scrollToBottom()

        }, 200);
    }

    // const sendMsg = (e) => {
    //     e.preventDefault()
    //     if (!userMsg) {
    //         return
    //     }
    //     let data = {
    //         dialog_id: selectedDialogVal.id,
    //         user_id: auth.id,
    //         message: userMsg,
    //         created_at: new Date().toISOString()
    //     }
    //     dispatch(pushMessage(data))

    //     // setmsgs(msgs.concat([data]))
    //     setuserMsg('')
    //     createMessage(data)
    //         .then(resp => {
    //             // console.log(resp)
    //         })
    //         .catch((err) => console.log(err))

    //     socket.emit("sendmessage", {
    //         user: `message.chat${user.id}`,
    //         type: 'message',
    //         data: data
    //     });


    //     // console.log(userMsg)

    // }
    if (!selectedDialogVal.id) {
        return (
            <div className="right">
                <div className="top"></div>
                <div className="chat">

                    {!loading && !dialogsArr.length && (
                        <div className="emptyDialog">
                            <img src="/static/images/undraw_typing.svg" />
                            <Typography>Your message box is empty</Typography>
                        </div>
                    )}
                    {!loading && dialogsArr.length > 0 && (
                        <div className="emptyDialog">
                            <Typography>Please select a dialog to start chat</Typography>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="right" >
            <div className="top">
                <div className={classes.flex}>
                    <KeyboardBackspaceIcon
                        className={classes.backBtn}
                        onClick={goBack}
                    />
                    <span>
                        To:{" "}
                        <span className="name">
                            {user.first_name} {user.last_name}
                        </span>
                    </span>
                </div>
                {link ? (
                    <p>
                        <a href={link}>{title}</a>
                    </p>
                ) : (
                        <p>{title}</p>
                    )}
            </div>
            <div className="chat" onScroll={handleChatBoxScroll} ref={chatBoxREf}>
                {loading && (
                    <div className="emptyDialog">
                        <CircularProgress color="primary" size={30} />
                    </div>
                )}
                <Messages auth={auth} />
                {/* {msgs.messages.length > 0 && (
                    <>
                        {console.log('logged',msgs.messages)}
                        {msgs.messages.map((msg, index) => <Message message={msg} auth={auth} key={index} />)
                        }</>
                )} */}

            </div>
            {/* // <Message>
                    //     <div className="conversation-start">
                    //         <span>Today, 5:38 PM</span>
                    //     </div>
                    //     <div className="bubble you">Hello, can you hear me?</div>
                    //     <div className="bubble you">I'm in California dreaming</div>
                    //     <div className="bubble me">... about who we used to be.</div>
                    //     <div className="bubble me">Are you serious?</div>
                    //     <div className="bubble you">I'm in California dreaming</div>
                    //     <div className="bubble me">... about who we used to be.</div>
                    //     <div className="bubble me">Are you serious?</div>
                    //     <div className="bubble you">When we were younger and free...</div>
                    //     <div className="bubble you">I've forgotten how it felt before</div>
                    // </Message> */}
            <div className="write">
                {!loading && (
                    <>
                        <a href="javascript:;" className="write-link attach"></a>
                        <input
                            type="text"
                            name="chatmessage"
                            id="chatmessage"
                            value={userMsg}
                            // className={classes.vHide}
                            onChange={(e) => setuserMsg(e.target.value)}
                        />
                        {/* <a href="javascript:;" className="write-link smiley"></a> */}
                        <a href="javascript:;" className="write-link send" onClick={sendMsg}></a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
