import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import mintingReducer from "./mintingReducer";
import myPageMintingReducer from './myPageMintingReducer'

export default combineReducers({
    account : accountReducer,
    mintdata : mintingReducer,
    mymintdata : myPageMintingReducer,
})