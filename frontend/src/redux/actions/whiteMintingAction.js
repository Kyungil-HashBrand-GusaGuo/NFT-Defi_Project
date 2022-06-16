import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../ropstenConfig";
import { ethers } from "ethers";
import axios from "axios";

function whiteMintAction(account) {

  console.log(account)

  return async (dispatch) => {
    try {
      const contract1 = await RandomJolamanContract();
      const response = await contract1.specialPayandMint({
      from: account,
      value: ethers.BigNumber.from("20000000000000000")
      });
      console.log("화이트 if문 전",response)

      if(response.status) {
        const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
        let metaDataURI = response[response.length-1]; 
        const getMetaData = async() => {
          const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmaavyzfX6XzVNJx4zKCQVNDJWwQJx9xUC6gmDfddxvQ6p/${metaDataURI}.json`);
          console.log( "if문 안",response.data)
          dispatch({type : "GET_WHITE_MINTDATA", payload : {whitemintdata : response.data}})         
        }
        getMetaData();
      }
    } catch (error){
      console.error(error);
    }
  }
}

export const whiteMintingAction = {whiteMintAction}