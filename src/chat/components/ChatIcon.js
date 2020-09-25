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
        console.log('testmessage')

        // fetch('https://fcm.googleapis.com/fcm/send', {
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //         "Authorization": "key=AAAA-Yf4fSo:APA91bEILEM5suIKKBpBMPabUjyGqd_nB7ut4NVTejk0dCn4lCjT1D5-CmPQELmL7IhbKOkmr-cc--3awYZ2XMLzHuySymvn3eMdmd0vt2HsmA6ejMfAaUvKPmNrAVgKyxYCgS8_l0Bs"
        //     },
        //     method: "post",
        //     body: JSON.stringify({
        //         to: "dE9pEpH48Jo-2yaibdw8kY:APA91bHQUxXyn801XBCeC8GKeA5ma66w3i6IOsawrk-7opb1VPYsf2zZSN_RNIhLvuEvUzDJOA2ex7tlgVR9J_VusDq_EjUKkLmmB613426XDzCVxHzbWEV4x9ZTjg5wKPYXjgqN6Xwa",
        //         data: {
        //             "notification": {
        //                 "title": "Hello",
        //                 "body": "world"
        //             }
        //         }
        //     }),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             throw Error(`Request rejected with status ${response.status}`);
        //         }
        //     })
        //     .then((responseData) => {
        //         console.log(responseData);
        //         return responseData;
        //     })
        //     .catch((error) => console.log(error));

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
