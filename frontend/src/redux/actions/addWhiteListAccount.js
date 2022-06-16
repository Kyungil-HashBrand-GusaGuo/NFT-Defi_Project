import { RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../ropstenConfig";


function addWhiteList(account, address) {
  
  // console.log("해당계정", account)  
  // console.log("추가계정", address)

  return async (dispatch) => {
        try {
          // const contract = await RandomJolamanContract();
          const response = await RandomJolamanContract.addWhiteList(address);
            // const response = await window.ethereum.sendTransaction({
            //   from: account,
            //   to: MINT_CONTRACT_ADDRESS,
            //   gas: "3000000",
            //   data: RandomJolamanContract().addWhiteList(address).encodeABI(),
            // });
            console.log(response)
          } catch(error) {
            console.error(error);
          }
    }
}

export const addWhiteListAccount = {addWhiteList}