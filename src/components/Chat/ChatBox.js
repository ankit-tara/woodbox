import React, { useEffect, useState, useRef } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";
import { commonStyles, desktopStyles, mobileStyles } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createMessage, fetchMessages, readAll } from "../../apis/chat-api";
import dialogs from "../../redux/reducers/dialogs";
import Message from "./Message";
import { AddToPhotosSharp } from "@material-ui/icons";
import moment from 'moment'
import useSocket from '../../Utils/useSocket'

const useStyles = makeStyles((theme) => ({
    ...commonStyles,
    [theme.breakpoints.up("sm")]: desktopStyles,
    [theme.breakpoints.down("sm")]: mobileStyles,
}));
const ChatBox = ({ selectedDialogVal, auth, goBack }) => {
    const classes = useStyles();
    const [loading, setloading] = useState(true);
    // const [dialog, setdialog] = useState({});
    const [data, setdata] = useState({});
    const [userMsg, setuserMsg] = useState('');
    const [msgs, setmsgs] = useState([]);
    const [user, setuser] = useState("");
    const [title, settitle] = useState("");
    const [link, setlink] = useState("");
    const socket = useSocket();

    const chatBoxREf = useRef('')

    useEffect(() => {

        setloading(true);
        let dialog = selectedDialogVal;
        if (dialog && dialog.users.length) {
            let user = dialog.users.filter((item) => item.user.id != auth.id);
            setuser(user[0].user);
        }
        if (dialog && dialog.related_data) {
            let type = dialog.related;
            let data = dialog.related_data;

            let link = `products/item/${data.id}`
            if (type == "event") {
                link = `events/item/${data.id}`
            }

            settitle(data.title);
            setlink(link);
        }
        getMessages();
        if (socket && auth) {
            socket.on(`message.chat${auth.id}`, message => {
                if (message.data && message.data.dialog_id == selectedDialogVal.id) {
                    setmsgs(msgs.concat([message.data]))
                }
                console.log('message', message)
            });
        }
    }, [selectedDialogVal, socket]);

    const getMessages = (data, msgs = []) => {
        if (!msgs.length) {
            setmsgs([])

        }
        let count = 1;
        if (data && data.current_page) {
            count = data.current_page + 1;
        }
        let q = `?page=${count}`;
        let dialog = selectedDialogVal;
        if (!dialog) {
            return;
        }
        fetchMessages(dialog.id, q).then((data) => {
            if (data && data.data) {
                let newMsgs = data.data.reverse()
                let msgData = newMsgs.concat(msgs);
                setmsgs(msgData);
                setdata(data);
            }


            if (!msgs.length) {
                setTimeout(() => {
                    setloading(false);
                    scrollToBottom()

                }, 200);
            } else {
                setloading(false);
            }
        
            // readAll(dialog.id, auth.id).then(data=>console.log(data))


        });
    };

    const scrollToBottom = () => {
        if (!chatBoxREf || !chatBoxREf.current) {
            return
        }

        chatBoxREf.current.scrollTop = chatBoxREf.current.scrollHeight
        // console.log(chatBoxREf.current)
        // chatBoxREf.current.scrollIntoView({ behavior: 'smooth' });

    }

    const handleChatBoxScroll = (e) => {
        let target = e.target;
        if (!msgs.length || data.current_page == data.last_page) {
            return;
        }
        if (!target.scrollTop && !loading) {
            // setdialogLoader(true)
            // getDialogs();
            getMessages(data, msgs)
        }
    }

    const sendMsg = (e) => {
        e.preventDefault()
        if (!userMsg) {
            return
        }
        let data = {
            dialog_id: selectedDialogVal.id,
            user_id: auth.id,
            message: userMsg,
            created_at: new Date().toISOString()
        }
        setmsgs(msgs.concat([data]))
        setuserMsg('')
        createMessage(data)
            .then(resp => {
                // console.log(resp)
            })
            .catch((err) => console.log(err))

        socket.emit("sendmessage", {
            user: `message.chat${user.id}`,
            type: 'message',
            data: data

        });


        // console.log(userMsg)

    }

    return (
        <div className="right" >
            <div className="top">
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
                {msgs.length > 0 && (
                    msgs.map((msg) => <Message message={msg} auth={auth} />)

                )}

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
