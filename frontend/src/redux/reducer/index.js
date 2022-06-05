import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import mintingReducer from "./mintingReducer";

export default combineReducers({
    account : accountReducer,
    mintdata : mintingReducer
})