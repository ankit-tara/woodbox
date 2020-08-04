import {
  FETCH_MESSAGES,
  PUSH_MESSAGE,
  DELETE_ALL_MESSAGES,
  LAZY_FETCH_MESSAGES,
  UPDATE_MESSAGES,
} from "../actionTypes/messages";

export const fetchMessages = (dialogId, history) => ({
  type: FETCH_MESSAGES,
  dialogId,
  history,
});
export const lazyFetchMessages = (dialogId, history) => ({
  type: LAZY_FETCH_MESSAGES,
  dialogId,
  history,
});
export const updateMessages = (dialogId, msgId, msg) => ({
  type: UPDATE_MESSAGES,
  dialogId,
  msgId,
  msg,
});
export const pushMessage = (message, dialogId) => ({
  type: PUSH_MESSAGE,
  message,
  dialogId,
});
export const deleteAllMessages = (dialogId) => ({
  type: DELETE_ALL_MESSAGES,
  dialogId,
});
