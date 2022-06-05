let initialState = {
    account : ''
}

const myPageMintingReducer = (state=initialState,action) => {
    let {type, payload} = action
    // console.log(payload)

    switch(type) {
        case "GET_MYMINTINGDATA" :
            return {...state, account : payload.account}

        default :
            return {...state}
    }
}

export default myPageMintingReducer