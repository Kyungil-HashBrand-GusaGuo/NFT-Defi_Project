import { caver, STAKING_CONTRACT_ADDRESS, StakingContract } from "../../caverConfig";

function stakingRewardAct(account) {

    console.log(account)

    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: STAKING_CONTRACT_ADDRESS,
                gas: "3000000",
                data: StakingContract.methods.claimReward(account).encodeABI()
            })
            dispatch({
              type:"SUCCESS_CLAIM", 
              payload : {successClaim : true}
            })
          } catch (error){
            console.error(error);
            window.location.reload()
          }
    }
}

export const stakingRewardAction = {stakingRewardAct}