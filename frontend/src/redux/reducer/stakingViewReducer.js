let initialState = {
    myNftList : '',
    stakingNftString : '',
    stakingNftNumber : '',
    stakingReward : '',
    getStakingReward : '',
    getKlayBalance : ''
}

function stakingViewReducer(state=initialState,action) {
    let {type, payload} = action
    // console.log(payload)

    switch(type) {

        case "GET_STAKING_VIEW_SUCCESS" :
            return {...state,
                myNftList : payload.myNftList,
                stakingNftString : payload.stakingNftString,
                stakingNftNumber : payload.stakingNftNumber,
                stakingReward : payload.stakingReward,
                getStakingReward : payload.getStakingReward,
                getKlayBalance : payload.getKlayBalance
            }

        default :
            return {...state}
    }
}   

export default stakingViewReducer