import api from '../api'

function getAccount() {
    return async (dispatch) => {
        try {
            const accounts = await window.klaytn.enable();
            let account = accounts[0]
            dispatch({type : "GET_ACCOUNT", payload : {account}})

            const whiteListCheckFunc = await api.post("/block/isWhiteList", { account });
            let whiteListCheck = whiteListCheckFunc.data
            dispatch({type : "CHECK_ACCOUNT", payload : {whiteListCheck}})

            // admin계정 가져오기
            const adminAccountFunc = await api.get("/block/getOwner");
            let adminAccount = adminAccountFunc.data.toLowerCase()
            // console.log(adminAccount);

            dispatch({type : "GET_ADMIN_ACCOUNT", payload : {adminAccount}})
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const connectAccount = {getAccount}