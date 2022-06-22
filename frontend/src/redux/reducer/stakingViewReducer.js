let initialState = {
    myNftList : '',
    stakingNftString : '',
    stakingNftNumber : '',
    stakingReward : '',
    getStakingReward : '',
    getKlayBalance : '',
    getTokenBalance : '',
    swapSuccess : false,
    swapModalChange : false
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
                getKlayBalance : payload.getKlayBalance,
                getTokenBalance : payload.getTokenBalance
            }

        case "SUCCESS_SWAP" :
            return {...state,
                swapSuccess : payload.swapSuccess
            }

        case "CHANGE_SWAP_MODAL" :
            return {...state,
                swapModalChange : payload.swapModalChange
            }

        default :
            return {...state}
    }
}   

export default stakingViewReducer