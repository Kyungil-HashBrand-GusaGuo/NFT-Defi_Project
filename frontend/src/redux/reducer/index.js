import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import mintingReducer from "./mintingReducer";
import transactionReducer from "./transactionReducer"
import stakingViewReducer from "./stakingViewReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
    account : accountReducer,
    mintdata : mintingReducer,
    transactionNFT : transactionReducer,
    stakingView : stakingViewReducer,
    game : gameReducer
})