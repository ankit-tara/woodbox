import React, { useEffect, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService"
import { useSelector } from "react-redux";
import ChatService from "../../redux/services/chat-service";
import Link from 'next/link'
import { unreadMsg } from "../../apis/chat-api";
import useSocket from "../../Utils/useSocket";

// import ConnectyCube from 'connectycube'

const ChatMessageIcon = () => {
    const socket = useSocket()

    const authUser = useSelector((state) => state.auth_user.user);

    const [count, setcount] = useState();
    // const [Dialogs, setDialogs] = useState([]);

    useEffect(() => {
        if(authUser){
            unreadMsg(authUser.id).then(data=>{
                data && setcount(data)
            })
        }



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

    }, [authUser,socket])
    return (
        <div>
            <IconButton  color="inherit">
            {/* <IconButton aria-label="you haves" color="inherit"> */}
                <Badge badgeContent={count} color="secondary">
                    <Link href="/chat">
                        <ChatIcon />
                    </Link>
                </Badge>
            </IconButton>
        </div>
    )
}

export default ChatMessageIcon
