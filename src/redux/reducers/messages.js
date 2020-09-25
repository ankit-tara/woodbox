import {
  PUSH_MESSAGE,
  SET_MESSAGES,
  DELETE_ALL_MESSAGES,
  LAZY_FETCH_MESSAGES,
  UPDATE_MESSAGES,
} from "../actionTypes/messages";
import { SELECTED_DIALOG } from "../actionTypes/selectedDialog";

import { lazyFetchMessages, updateStatusMessages } from "./reducer-function";

let initial_state = {
  dialog: {},
  messages: []
}

export default (messages = initial_state, action) => {

  switch (action.type) {
    case SET_MESSAGES: {
      const msgs = action.msgs;
      const dialog = action.dialog;
      return { dialog: dialog, messages: msgs };
    }

    // case SELECTED_DIALOG: {
    //   console.log(action)
    //   const dialog = action.dialog;
    //   return { ...messages, dialog: dialog };
    // }


    case PUSH_MESSAGE: {
      let msg = action.msg
      console.log(action, messages, msg.dialog_id)
      if (msg && msg.dialog_id == messages.dialog.id) {
        const msgs = messages.messages.concat(action.msg);
        return { ...messages, messages: msgs };
      }
      return messages

    }

    case DELETE_ALL_MESSAGES: {

      return initial_state;
    }

    default:
      return initial_state;
  }
};
