import React, { useEffect, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService"
import { useSelector } from "react-redux";
import ChatService from "../../redux/services/chat-service";
// import ConnectyCube from 'connectycube'

const ChatMessageIcon = () => {

    const authUser = useSelector((state) => state.auth_user);

    const [Dialogs, setDialogs] = useState([]);

    useEffect(() => {
        // if (!authUser)
        // let test = AuthService.init()
        // test && authUser.user.connectycube_user && authUser &&
        //     AuthService.login({
        //         email: authUser.user.email,
        //         password: authUser.user.connectycube_user.password,
        //     }).then((user) => {
        //         // console.log(user)
        //         // ChatService.fetchDialogsFromServer()
        //         //   .then((dialogs) => {
        //         //     console.log("dialogsdialogs", dialogs);
        //         //     setDialogs(dialogs);
        //         //   })
        //         //   .catch((err) => {
        //         //     console.log("err", err);
        //         //   });
        //     })
        //     .catch((error) => { console.log(error)});;

    }, [])
    return (
        <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <ChatIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default ChatMessageIcon
