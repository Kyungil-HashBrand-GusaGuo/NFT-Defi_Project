import {
    caver,
    STAKING_CONTRACT_ADDRESS,
    StakingContract
  } from "../../caverConfig.js";

function startStakingAct(account) {
    console.log(account)
    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: STAKING_CONTRACT_ADDRESS,
                gas: "3000000",
                data: StakingContract.methods.initStaking().encodeABI()
            })
            console.log(response);
        } catch(error) {
            console.error(error);
        }
    }
}

export const startStakingAction = {startStakingAct}