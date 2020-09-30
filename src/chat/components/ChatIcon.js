import React, { useEffect, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AuthService from "../services/authService";
import { useSelector,useDispatch } from "react-redux";
// import ChatService from "../../redux/services/chat-service";
import Link from "next/link";
import { unreadMsg } from "../../apis/chat-api";
import ConnectyCube from 'connectycube'
import appConfig from '../../../appConfig'
import { chatUnauthenticated } from "../../redux/actions/chatUser";
import { chatReset } from "../../redux/actions/chatConnected";
import chatService from "../../redux/services/chat-service";
import { unSelectedDialog } from "../../redux/actions/selectedDialog";

const ChatMessageIcon = () => {
    const authUser = useSelector((state) => state.auth_user.user);

    const [count, setcount] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        if (authUser && authUser.connectycube_user) {
            dispatch(chatUnauthenticated())
            dispatch(chatReset())
            dispatch(unSelectedDialog())
            // connectChat()
            // console.log('authUser', authUser)
            // return
            let init = AuthService.init();
            const userCredentials = {
                email: authUser.email,
                password: authUser.connectycube_user.password,
            };
            // ConnectyCube.createSession(userCredentials)
            //     .then((session) => { 
            //         console.log('session',session)
            //     })
            //     .catch((error) => { console.log('error', error)});
            if (init && authUser.connectycube_user) {
                console.log()
                AuthService.login({
                    email: authUser.email,
                    password: authUser.connectycube_user.password,
                }).then((user) => {
                //      chatService.fetchDialogsFromServer()
                //   .then((dialogs) => {
                //     console.log("dialogsdialogs", dialogs);
                //     setDialogs(dialogs);
                //   })
                //   .catch((err) => {
                //     console.log("err", err);
                //   });
                    // setUpListeners()
                })
                    .catch((error) => { console.log(error) });
            }

            unreadMsg(authUser.id).then((data) => {
                data && setcount(data);
            });
        }
    }, []);

    const connectChat = async() => {
        const CREDENTIALS = {
            email: authUser.email,
            password: authUser.connectycube_user.password,
        };
        const CONFIG = {
            on: {
                sessionExpired: (handleResponse, retry) => {
                    // call handleResponse() if you do not want to process a session expiration,
                    // so an error will be returned to origin request
                    // handleResponse();

                    // JS SDK v2
                    ConnectyCube.createSession()
                        .then(retry)
                        .catch((error) => { });
                },
            },
        };

      let init = await  ConnectyCube.init(...appConfig.connectyCubeConfig, CONFIG);
        console.log(init)
      if(init){
          ConnectyCube.login(CREDENTIALS)
              .then((session) => { 
                  console.log('session',session)
              })
              .catch((error) => { });
      }
    }

    const setUpListeners = () => {
        ConnectyCube.chat.onMessageListener = onMessage;
        const opponentId = 2066645;
        let message = {
            type: 'groupchat',
            body: "How are you today?",
            extension: {
                save_to_history: 1,
                dialog_id: '5f6f3676ca8bf42a744c3f4b'
            },
            markable: 1
        };

        message = ConnectyCube.chat.send(opponentId, message);
        console.log('message', message)
    }

    function onMessage(userId, message) {
        console.log('[ConnectyCube.chat.onMessageListener] callback:', userId, message)
    }
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
    );
};

export default ChatMessageIcon;
