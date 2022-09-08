import {
  caver,
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
} from "../../caverConfig";
import { ethers } from "ethers";
import { setDataContract } from "../../config";
import { RandomJolamanContract } from "../../config";

function addWhiteList(account, address) {
  // console.log("해당계정", account)
  // console.log("추가계정", address)

  return async (dispatch) => {
    try {
      const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        gas: "3000000",
        data: RandomJolamanContract.methods.addWhiteList(address).encodeABI(),
      });

      const response2 = await setDataContract.signer.sendTransaction({
        from: account,
        to: RandomJolamanContract.MINT_CONTRACT_ADDRESS,
        // value: ethers.utils.parseEther("0.2"),
        gasPrice: "3000000",
        // data: abiCoder.encode(["string"], ["asdfsdfasdf"]),
        data: RandomJolamanContract.addWhiteList(address),
      });

      // console.log(response)
      dispatch({ type: "ADD_WHITELIST", payload: { addWhiteList: true } });
    } catch (error) {
      console.error(error);
    }
  };
}

export const addWhiteListAccount = { addWhiteList };
