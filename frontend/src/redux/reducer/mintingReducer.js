let initialState = {
    mintdata : ''
}

function mintingReducer(state=initialState,action) {
    let {type, payload} = action
    console.log(payload)

    switch(type) {
        case "GET_MINTDATA" :
            return {...state, mintdata : payload.mintdata}

        default :
            return {...state}
    }
}   

export default mintingReducer