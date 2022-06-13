import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../caverConfig";
import { ethers } from "ethers";
import axios from "axios";

function whiteMintAction(account) {

    console.log(account)

    return async (dispatch) => {
        try {
            const response = await window.ethereum.sendTransaction({
                from: account,
                to: MINT_CONTRACT_ADDRESS,
                value: ethers.utils.formatEther(2, "Ether"),
                gas: "3000000",
                data: RandomJolamanContract.methods.specialPayandMint().encodeABI(),
            })
            console.log("화이트 if문 전",response)
            if(response.status) {
                const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
                let metaDataURI = response[response.length-1]; 
                const getMetaData = async() => {
                const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmZ9QKfGeqLjNjaiHa2tcwsGyRDDUc85ZkoUzMWuPohajc/${metaDataURI}.json`);
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