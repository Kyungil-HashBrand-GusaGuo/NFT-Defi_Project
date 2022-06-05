let initialState = {
    mintdata : '',
    maxNormalTokenCount : '',
    maxSpecialTokenCount : '',
    normalTokenCount : '',
    specialTokenCount : ''
}

function mintingReducer(state=initialState,action) {
    let {type, payload} = action
    // console.log(payload)

    switch(type) {
        case "GET_MINTDATA" :
            return {...state, mintdata : payload.mintdata}

        case "GET_ALL_TOKENCOUNT" :
            return {...state,
                maxNormalTokenCount : payload.maxNormalTokenCount,
                maxSpecialTokenCount : payload.maxSpecialTokenCount - 10000,
                normalTokenCount : payload.normalTokenCount,
                specialTokenCount : payload.specialTokenCount - 10000
            }

        default :
            return {...state}
    }
}   

export default mintingReducer