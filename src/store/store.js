import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import usersReducer from "../redux/usersReducer.js";
const rootStore = combineReducers({
    users:usersReducer
})

const store = createStore(
    rootStore, applyMiddleware(thunk)
)
export default store

