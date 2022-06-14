let initialState = {
    sellingNftSuccess : false,
    sellingNftCancel : false,
    sellingAllNftData : '',
    sellingNftId : '',
    sellingNftPrice : '',
    buyingNftSuccess : false
}

function transactionReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "SUCCESS_SELL_NFT" :
            return {...state, sellingNftSuccess : payload.sellingNftSuccess}

        case "CANCEL_SELL_NFT" :
            return {...state, sellingNftCancel : payload.sellingNftCancel}

        case "GET_ALL_SELL_NFT" :
            return {...state, 
                sellingAllNftData : payload.sellingAllNftData,
                sellingNftId : payload.sellingNftId,
                sellingNftPrice : payload.sellingNftPrice
            }

        case "SUCCESS_BUY_NFT" :
            return {...state, buyingNftSuccess : payload.buyingNftSuccess}

        default :
            return {...state}
    }
}   

export default transactionReducer