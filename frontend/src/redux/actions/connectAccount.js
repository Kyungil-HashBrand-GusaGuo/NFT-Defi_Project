// import { RandomJolamanContract } from "../../ropstenConfig";
import axios from "axios";

function getAccount() {
    return async (dispatch) => {
        try {
            const accounts = await window.ethereum.enable();
            // console.log(accounts)
            let account = accounts[0]
            //dispatch({type : "GET_DATA", payload : {test}})
            dispatch({type : "GET_ACCOUNT", payload : {account}})

            const whiteListCheckFunc = await axios.post("http://localhost:9495/block/isWhiteList", { account });
            let whiteListCheck = whiteListCheckFunc.data
            dispatch({type : "CHECK_ACCOUNT", payload : {whiteListCheck}})

            // admin계정 가져오기
            const adminAccountFunc = await axios.get("http://34.64.61.199:9495/block/getOwner");
            let adminAccount = adminAccountFunc.data.toLowerCase()
            console.log(adminAccount);

            dispatch({type : "GET_ADMIN_ACCOUNT", payload : {adminAccount}})
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const connectAccount = {getAccount}