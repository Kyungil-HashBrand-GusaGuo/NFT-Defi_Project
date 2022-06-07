import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";
//import { useSelector } from 'react-redux';

function addWhiteList(account, address) {
  
  // console.log("해당계정", account)  
  // console.log("추가계정", address)

  return async (dispatch) => {
        try {
          console.log("여긴와?")
            const response = await caver.klay.sendTransaction({
              from: account,
              to: MINT_CONTRACT_ADDRESS,
              gas: "3000000",
              data: RandomJolamanContract.methods.addWhiteList(address).encodeABI(),
            });
            console.log(response)
          } catch(error) {
            console.error(error);
          }
    }
}

export const addWhiteListAccount = {addWhiteList}