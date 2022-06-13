import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import mintingReducer from "./mintingReducer";
import transactionReducer from "./transactionReducer"

export default combineReducers({
    account : accountReducer,
    mintdata : mintingReducer,
    transactionNFT : transactionReducer
})