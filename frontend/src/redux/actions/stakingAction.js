import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract, STAKING_CONTRACT_ADDRESS,StakingContract } from "../../caverConfig";

function stakingAct(account, edition) {

    console.log(account)
    console.log(edition)

    return async (dispatch) => {
        try {
            const res = await setDataContract.methods.gettypeToId(edition).call()
            let tokenId = res;
            const response = await caver.klay.sendTransaction({
            from: account,
            to: MINT_CONTRACT_ADDRESS,
            gas: "3000000",
            data: RandomJolamanContract.methods.approve(STAKING_CONTRACT_ADDRESS, tokenId).encodeABI()   
            })
            console.log("스테이킹 if문 전",response)
            if(response.status) {
                const response = await caver.klay.sendTransaction({
                    from: account,
                    to: STAKING_CONTRACT_ADDRESS,
                    gas: "3000000",
                    data: StakingContract.methods.stake(edition).encodeABI()
                })
                console.log("스테이킹 if문 안",response)
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const stakingAction = {stakingAct}