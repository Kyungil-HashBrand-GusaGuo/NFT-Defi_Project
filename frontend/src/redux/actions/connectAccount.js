import { RandomJolamanContract } from "../../caverConfig";


function getAccount() {
    return async (dispatch) => {
        try {
            const accounts = await window.klaytn.enable();
            // console.log(accounts)
            let account = accounts[0]
            //dispatch({type : "GET_DATA", payload : {test}})
            dispatch({type : "GET_ACCOUNT", payload : {account}})

            const whiteListCheck = await RandomJolamanContract.methods.isWhiteList(account).call();
            //console.log("화이트리스트 체크",whiteListCheck)
            dispatch({type : "CHECK_ACCOUNT", payload : {whiteListCheck}})
            
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const connectAccount = {getAccount}