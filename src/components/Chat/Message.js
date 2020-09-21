import React, { useEffect, useState } from 'react'
import moment from 'moment'
const Message = ({ message, auth }) => {
    const [text, settext] = useState('')
    const [isAuth, setisAuth] = useState(false)

    useEffect(() => {
        if (!message) {
            return
        }
        setisAuth(message.user_id == auth.id)
        settext(message.message)

    }, [])

    if (!text) {
        return false
    }

    return (
        <div className="msg">
            <div className={`bubble you ${isAuth ? 'me' : 'you'}`}>
                <span className="text">{text}</span>
                <span className="time"> {moment(message.created_at).format("hh:mm a")}</span>
            </div>

        </div>
    )
}

export default Message
