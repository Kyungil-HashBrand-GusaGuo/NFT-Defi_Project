let initialState = {
    account : '',
    whiteListCheck : false,
    adminAccount : '',
    addWhiteList : false,
    deleteWhiteList : false
}

function accountReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "GET_ACCOUNT" :
            return {...state, account : payload.account}

        case "CHECK_ACCOUNT" :
            return {...state, whiteListCheck : payload.whiteListCheck}

        case "GET_ADMIN_ACCOUNT" :
            return {...state, adminAccount : payload.adminAccount}

        case "GET_ADMIN_ACCOUNT" :
            return {...state, addWhiteList : payload.addWhiteList}

        case "DELETE_WHITELIST" :
            return {...state, deleteWhiteList : payload.deleteWhiteList}

        default :
            return {...state}
    }
}   

export default accountReducer