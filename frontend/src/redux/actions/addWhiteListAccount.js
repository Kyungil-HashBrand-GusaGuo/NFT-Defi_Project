import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";
//import { useSelector } from 'react-redux';

function addWhiteList(account,address) {
  
  //let {account} = useSelector(state => state.account);
  
  console.log("해당계정", account)  // 정현이코드에선 작동할듯 계정 가져오기때문에
  console.log("추가계정", address)
  let test = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE"

  return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
              from: test,
              to: MINT_CONTRACT_ADDRESS,
              gas: "3000000",
              data: RandomJolamanContract.methods.addWhiteList(test).encodeABI(),
            });
            console.log(response)
          } catch(error) {
            console.error(error);
          }
    }
}

export const addWhiteListAccount = {addWhiteList}