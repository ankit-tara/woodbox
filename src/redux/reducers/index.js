import { combineReducers } from "redux";
import auth_user from "./auth";
import auth_modal from "./authModal";

export default combineReducers({ auth_user, auth_modal });
