import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";


function addWhiteList(account, address) {

    console.log("해당계정", account)  // 정현이코드에선 작동할듯 계정 가져오기때문에
    console.log("추가계정", address)

    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
              from: account,
              to: MINT_CONTRACT_ADDRESS,
              gas: "3000000",
              data: RandomJolamanContract.methods.addWhiteList(address).encodeABI(),
            });
            console.log("들어오니?")
            console.log(response)
          } catch(error) {
            console.error(error);
          }
    }
}

export const addWhiteListAccount = {addWhiteList}