let initialState = {
    account : '',
    whiteListCheck : false
}

function accountReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "GET_ACCOUNT" :
            return {...state, account : payload.account}

        case "CHECK_ACCOUNT" :
            return {...state, whiteListCheck : payload.whiteListCheck}

        default :
            return {...state}
    }
}   

export default accountReducer