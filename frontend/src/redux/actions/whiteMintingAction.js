<<<<<<< HEAD
import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../ropstenConfig";
import { ethers } from "ethers";
import axios from "axios";
=======
import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../caverConfig";
import pinataApi from "../pinataApi";
>>>>>>> origin/main

function whiteMintAction(account) {

  console.log(account)

<<<<<<< HEAD
  return async (dispatch) => {
    try {
      // const contract1 = await RandomJolamanContract();
      const response = await RandomJolamanContract.specialPayandMint({
      from: account,
      value: ethers.BigNumber.from("20000000000000000")
      });
      console.log("화이트 if문 전",response)
=======
    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: MINT_CONTRACT_ADDRESS,
                value: caver.utils.convertToPeb(2, "KLAY"),
                gas: "3000000",
                data: RandomJolamanContract.methods.specialPayandMint().encodeABI(),
            })
            console.log("화이트 if문 전",response)
            if(response.status) {
                const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
                let metaDataURI = response[response.length-1]; 
                const getMetaData = async() => {
                const response = await pinataApi.get(`/${metaDataURI}.json`);
                console.log( "if문 안",response.data)
                dispatch({type : "GET_WHITE_MINTDATA", payload : {whitemintdata : response.data}})         
              }
              getMetaData();
            }
            
>>>>>>> origin/main

      if(response.status) {
        // const contract2 = await setDataContract();
        const response = await setDataContract.getTotalOwnedTokens(account);
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