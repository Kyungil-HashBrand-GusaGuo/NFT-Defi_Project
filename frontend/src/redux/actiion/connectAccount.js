function getAccount() {
    return async (dispatch) => {
        try {
            const accounts = await window.klaytn.enable();
            console.log(accounts)
            let account = accounts[0]
            //dispatch({type : "GET_DATA", payload : {test}})
            dispatch({type : "GET_ACCOUNT", payload : {account}})
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const connectAccount = {getAccount}