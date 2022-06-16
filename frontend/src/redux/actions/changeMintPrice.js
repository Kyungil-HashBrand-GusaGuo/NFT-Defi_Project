import { RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../ropstenConfig";
import {ethers} from "ethers";


function changePrice(account, price) {
  
  // console.log("해당계정", account)  
  // console.log("추가계정", address)

  return async (dispatch) => {
        try {
          // const contract = await RandomJolamanContract();
          const response = await RandomJolamanContract.setMintingPrice(price);
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

export const changeMintPrice = {changePrice}