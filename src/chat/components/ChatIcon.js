import React ,{useEffect}from 'react'
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService"
import { useSelector } from "react-redux";
// import ConnectyCube from 'connectycube'

const ChatMessageIcon = () => {

    const authUser = useSelector((state) => state.auth_user);

    useEffect(() => {
        let test = AuthService.init()
        console.log(test)
        test && authUser &&
          AuthService.login({
            email: authUser.user.email,
            password: "test",
          }).then((user) => {})
            .catch((error) => {});;
       
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
