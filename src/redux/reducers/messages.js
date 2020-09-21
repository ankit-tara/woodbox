import {
  PUSH_MESSAGE,
  SET_MESSAGES,
  DELETE_ALL_MESSAGES,
  LAZY_FETCH_MESSAGES,
  UPDATE_MESSAGES,
} from "../actionTypes/messages";

import { lazyFetchMessages, updateStatusMessages } from "./reducer-function";

export default (messages = [], action) => {

  switch (action.type) {
    case SET_MESSAGES: {
      const msgs = action.msgs;
      return msgs;
    }


    case PUSH_MESSAGE: {
      const msgs = messages.concat(action.msg);
      return msgs;
    }

    case DELETE_ALL_MESSAGES: {

      return [];
    }

    default:
      return messages;
  }
};
