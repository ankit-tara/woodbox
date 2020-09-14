import React, { useState, useEffect } from 'react'
import moment from "moment";
import { useSelector } from 'react-redux';
import dialogs from '../../redux/reducers/dialogs';

const DialogBox = ({ dialog, auth, selectDialog }) => {
    const [user, setuser] = useState('')
    const [msg, setmsg] = useState('')
    const [title, settitle] = useState('')
    const [time, settime] = useState('')
    const selectedDialogVal = useSelector((state) => state.selectedDialog);

    useEffect(() => {
        if (dialog.dialog && dialog.dialog.users.length) {
            let user = dialog.dialog.users.filter(item => item.user.id != auth.id)
            setuser(user[0].user)
        }
        if (dialog.dialog && dialog.dialog.last_message) {
            setmsg(dialog.dialog.last_message)
        }
        if (dialog.dialog && dialog.dialog.related_data) {
            settitle(dialog.dialog.related_data.title)
        }
    }, [dialog])

    const gotoChat = () => {
        if (!dialog || !dialog.dialog) {
            return
        }
        selectDialog(dialog)
    }

    const isSelected = selectedDialogVal && dialog && selectedDialogVal.dialog_id == dialog.dialog_id
    return (

        <li onClick={gotoChat} className={`person ${isSelected ? 'selected' : ''}`}>
            <img
                src={user.profile_img ? user.profile_img : '/static/images/user-placeholder.png'}
                alt=""
            />
            <span className="name">{user.first_name}</span>
            <span className="time">
                {msg.created_at ? moment(msg.created_at).fromNow() : ''}
            </span>
            <span className="preview">{title}</span>
        </li>
    )
}

export default DialogBox
