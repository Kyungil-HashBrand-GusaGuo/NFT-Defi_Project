import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";
//import { useSelector } from 'react-redux';

function addWhiteList() {
  
  //let {account} = useSelector(state => state.account);
  
  // console.log("해당계정", account)  // 정현이코드에선 작동할듯 계정 가져오기때문에
  // console.log("추가계정", address)

  let account = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";
  let address = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";

  return async (dispatch) => {
    console.log("실행됨?")
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