let initialState = {
    mymintdata : ''
}

const myPageMintingReducer = (state=initialState,action) => {
    let {type, payload} = action
    // console.log(payload)

    switch(type) {
        case "GET_MYMINTINGDATA" :
            return {...state, mymintdata : payload.response}

        default :
            return {...state}
    }
}

export default myPageMintingReducer