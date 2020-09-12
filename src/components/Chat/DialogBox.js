import React, { useState, useEffect } from 'react'
import moment from "moment";

const DialogBox = ({ dialog, auth }) => {
    const [user, setuser] = useState('')
    const [msg, setmsg] = useState('')
    const [time, settime] = useState('')
    useEffect(() => {
        console.log(dialog)
        if (dialog.dialog && dialog.dialog.users.length) {
            let user = dialog.dialog.users.filter(item => item.user.id != auth.id)
            setuser(user[0].user)
        }
        if (dialog.dialog && dialog.dialog.last_message) {
            setmsg(dialog.dialog.last_message)
        }
    }, [dialog])
    const gotoChat = () => { }

    return (

        <li onClick={gotoChat} className="person">
            {console.log('user', user)}
            <img
                src={user.profile_img ? user.profile_img : '/static/images/user-placeholder.png'}
                alt=""
            />
            <span className="name">{user.first_name}</span>
            <span className="time">
                {msg.created_at ? moment(msg.created_at).fromNow() : ''}
            </span>
            <span className="preview">{msg.message}</span>
        </li>
    )
}

export default DialogBox
