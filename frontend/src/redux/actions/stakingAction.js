import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract, STAKING_CONTRACT_ADDRESS,StakingContract } from "../../ropstenConfig";

function stakingAct(account, edition) {

    console.log(account)
    console.log(edition)

    return async (dispatch) => {
        try {
            const tokenId = await setDataContract.gettypeToId(edition)
            const response = await RandomJolamanContract.approve(STAKING_CONTRACT_ADDRESS, tokenId);
            // const response = await caver.klay.sendTransaction({
            // from: account,
            // to: MINT_CONTRACT_ADDRESS,
            // gas: "3000000",
            // data: RandomJolamanContract.methods.approve(STAKING_CONTRACT_ADDRESS, tokenId).encodeABI()   
            // })
            console.log("스테이킹 if문 전",response)
            if(response.status) {
                const response = await StakingContract.stake(edition);
                // const response = await caver.klay.sendTransaction({
                //     from: account,
                //     to: STAKING_CONTRACT_ADDRESS,
                //     gas: "3000000",
                //     data: StakingContract.methods.stake(edition).encodeABI()
                // })
                console.log("스테이킹 if문 안",response)
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const stakingAction = {stakingAct}