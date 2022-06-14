import { RandomJolamanContract } from "../../caverConfig";
import axios from "axios";

function getAccount() {
    return async (dispatch) => {
        try {
            const accounts = await window.klaytn.enable();
            // console.log(accounts)
            let account = accounts[0]
            //dispatch({type : "GET_DATA", payload : {test}})
            dispatch({type : "GET_ACCOUNT", payload : {account}})

            const whiteListCheckFunc = await axios.post("http://localhost:9495/block/isWhiteList", { account });
            let whiteListCheck = whiteListCheckFunc.data
            dispatch({type : "CHECK_ACCOUNT", payload : {whiteListCheck}})
            
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const connectAccount = {getAccount}