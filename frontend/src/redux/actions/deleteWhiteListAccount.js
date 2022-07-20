import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";

function deleteWhiteList(account, address) {
  
//   console.log("해당계정", account)  
//   console.log("추가계정", address)

  return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: MINT_CONTRACT_ADDRESS,
                gas: "3000000",
                data: RandomJolamanContract.methods.removeWhiteList(address).encodeABI(),
              });
            console.log(response)
            dispatch({type:"DELETE_WHITELIST", payload : {deleteWhiteList : true}})
          } catch(error) {
            console.error(error);
          }
    }
}

export const deleteWhiteListAccount = {deleteWhiteList}