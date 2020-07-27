import React ,{useEffect}from 'react'
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService"
// import ConnectyCube from 'connectycube'

const ChatMessageIcon = () => {
    useEffect(() => {
        // let test = AuthService.init()
        // console.log(test)
        // test && AuthService.signIn({
        //     email:'test@test.com',
        //     password:'test'
        // })
       
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
