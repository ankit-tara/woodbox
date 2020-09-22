import React, { useEffect, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService"
import { useSelector } from "react-redux";
// import ChatService from "../../redux/services/chat-service";
import Link from 'next/link'
import { unreadMsg } from "../../apis/chat-api";


const ChatMessageIcon = () => {

    const authUser = useSelector((state) => state.auth_user.user);

    const [count, setcount] = useState();

    useEffect(() => {
        if (authUser) {
            unreadMsg(authUser.id).then(data => {
                data && setcount(data)
            })
        }

    }, [])
    return (
        <div>
            <IconButton color="inherit">
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
