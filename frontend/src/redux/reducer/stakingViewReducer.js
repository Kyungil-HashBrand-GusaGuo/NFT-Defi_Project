let initialState = {
    myNftList : '',
    stakingNftString : '',
    stakingNftNumber : '',
    stakingReward : '',
    getStakingReward : '',
    getKlayBalance : '',
    getTokenBalance : '',
    getGameTokenBalance : '',
    swapSuccess : false,
    swapModalChange : false,
    successClaim : false,
    successStaking : false,
    successUnStaking : false
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
                getTokenBalance : payload.getTokenBalance,
                getGameTokenBalance : payload.getGameTokenBalance
            }

        case "SUCCESS_SWAP" :
            return {...state,
                swapSuccess : payload.swapSuccess
            }

        case "CHANGE_SWAP_MODAL" :
            return {...state,
                swapModalChange : payload.swapModalChange
            }

        case "SUCCESS_CLAIM" :
            return {...state,
                successClaim : payload.successClaim
            }

        case "SUCCESS_STAKING" :
            return {...state,
                successStaking : payload.successStaking
            }

        case "SUCCESS_UNSTAKING" :
            return {...state,
                successUnStaking : payload.successUnStaking
            }

        default :
            return {...state}
    }
}   

export default stakingViewReducer