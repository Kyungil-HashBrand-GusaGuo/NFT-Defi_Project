import { caver, STAKING_CONTRACT_ADDRESS, StakingContract } from "../../caverConfig";

function swapAct(account,amount) {
    
    console.log(account)
    console.log(amount)
    
    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: STAKING_CONTRACT_ADDRESS,
                gas: "3000000",
                data: StakingContract.methods.TokenToKlay(amount).encodeABI()
            })
            console.log(response);
          } catch (error){
            console.error(error);
          }
    }
}

export const swapAction = {swapAct}