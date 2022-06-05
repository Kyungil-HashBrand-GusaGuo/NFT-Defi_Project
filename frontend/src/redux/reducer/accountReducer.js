let initialState = {
    account : ''
}

function accountReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "GET_ACCOUNT" :
            return {...state, account : payload.account}

        default :
            return {...state}
    }
}   

export default accountReducer