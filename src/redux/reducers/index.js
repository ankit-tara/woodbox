import { combineReducers } from "redux";
import auth_user from "./auth";
import auth_modal from "./authModal";
import chat_user from "./chatUser";
import dialogs from "./dialogs";
import messages from "./messages";
import selectedDialog from "./selectedDialog";
import pageVisited from "./PageVisited";

export default combineReducers({
  auth_user,
  auth_modal,
  chat_user,
  dialogs,
  messages,
  selectedDialog,
  pageVisited
});
