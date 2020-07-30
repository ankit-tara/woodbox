import { combineReducers } from "redux";
import auth_user from "./auth";
import auth_modal from "./authModal";
import chat_user from "./chatUser";

export default combineReducers({ auth_user, auth_modal, chat_user });
