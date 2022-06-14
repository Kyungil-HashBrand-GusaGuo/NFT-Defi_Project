import { MINT_CONTRACT_ABI, MINT_CONTRACT_ADDRESS, setDataContract } from "../../ropstenConfig";
import { ethers } from "ethers";
import axios from "axios";

const RandomJolamanContract = () => {
	let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
	let tempSigner = tempProvider.getSigner();
	let tempContract = new ethers.Contract(MINT_CONTRACT_ADDRESS, MINT_CONTRACT_ABI, tempSigner);
  console.log("tempContract", tempContract.methods)
	return tempContract;
}
RandomJolamanContract()
function preMintAction(account) {
  // console.log(setDataContract.getTotalOwnedTokens(account))
  return async (dispatch) => {
      try {
          // const response = await window.ethereum.sendTransaction({
          //   from: account,
          //   to: MINT_CONTRACT_ADDRESS,
          //   value: ethers.utils.formatEther(2, "Ether"),
          //   gas: "3000000",
          //   data: RandomJolamanContract.payandMint().encodeABI(),
          // })
          const response = await RandomJolamanContract.methods.payandMint({
            from: account,
            value: ethers.utils.formatEther(2, "Ether"),
            to: MINT_CONTRACT_ADDRESS,
          })
          console.log("if문 전",response)
          if(response.status) {
            const response = await setDataContract.getTotalOwnedTokens(account).call()
            let metaDataURI = response[response.length-1]; 
            const getMetaData = async() => {
              const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${metaDataURI}.json`);
              console.log( "if문 안",response.data)
              dispatch({type : "GET_PRE_MINTDATA", payload : {premintdata : response.data}})         
            }
            getMetaData();
          }

        } catch (error){
          console.error(error);
        }
  }
}

export const preMintingAction = {preMintAction}