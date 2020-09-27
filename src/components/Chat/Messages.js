import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { readAll } from '../../apis/chat-api';
import Message from './Message';

const Messages = ({ auth }) => {
    const msgs = useSelector((state) => state.messages);
    useEffect(() => {
        if (msgs.messages.length && auth) {
            let lastmsg = msgs.messages.slice(-1).pop()
            if (lastmsg.user_id != auth.id && !lastmsg.read) {
                // readAll(lastmsg.dialog_id, auth.id).then(data => console.log(data))
            }
        }


    }, [msgs])
    return (
        <div>
            {msgs.messages.length > 0 && (
                msgs.messages.map((msg) => <Message message={msg} auth={auth} />)
            )}
        </div>
    )
}

export default Messages
