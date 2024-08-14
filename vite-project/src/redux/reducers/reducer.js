import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer.js";
import contactsPageReducer from "./contactsPageReducer.js";
import usersPageReducer from "./usersPageReducer.js";

export const rootReducer = combineReducers({
    mainPageReducer,
    contactsPageReducer,
    usersPageReducer
})