import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS, STAKING_CONTRACT_ADDRESS,StakingContract } from "../../caverConfig";

function stakingAct(account, edition) {

    // console.log(account)
    // console.log(edition)

    return async (dispatch) => {
        try {
            // -- 하나만 스테이킹하는 코드 --
            // const res = await setDataContract.methods.gettypeToId(edition).call()
            // let tokenId = res;
            const response = await caver.klay.sendTransaction({
            from: account,
            to: MINT_CONTRACT_ADDRESS,
            gas: "3000000",
            // -- 하나만 스테이킹하는 코드 --
            // data: RandomJolamanContract.methods.approve(STAKING_CONTRACT_ADDRESS, tokenId).encodeABI()   
            data: RandomJolamanContract.methods.setApprovalForAll(STAKING_CONTRACT_ADDRESS, true).encodeABI()   
            })
            // console.log("스테이킹 if문 전",response)
            if(response.status) {
                const response = await caver.klay.sendTransaction({
                    from: account,
                    to: STAKING_CONTRACT_ADDRESS,
                    gas: "3000000",
                    data: StakingContract.methods.stakeBatch(edition).encodeABI()
                })
                // console.log("스테이킹 if문 안",response)
                dispatch({
                    type:"SUCCESS_STAKING", 
                    payload : {successStaking : true}
                  })
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const stakingAction = {stakingAct}