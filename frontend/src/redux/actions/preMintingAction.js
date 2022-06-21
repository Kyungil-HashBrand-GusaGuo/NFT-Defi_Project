import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../ropstenConfig";
import { ethers } from "ethers";
import axios from "axios";
import pinataApi from "../pinataApi";


function preMintAction(account) {
  // console.log(setDataContract.getTotalOwnedTokens(account))
  return async (dispatch) => {
    try {
      const response = await RandomJolamanContract.payandMint({
        from: account,
        value: ethers.BigNumber.from("20000000000000000")
      });
      // 1000000000000000000
      console.log("if문 전", response)

    } catch (error) {
      console.error(error);
    }
  }
}

// const getStatus = async (hash) => {
//   try {
//     const receiptStatus = web3.eth.getTransactionReceipt(hash).then(e => e.status)
//     console.log('receiptStatus before ', receiptStatus)
//     
//     if (receiptStatus) {
//       console.log('receiptStatus', receiptStatus)
//         // const contract2 = await setDataContract();
//         const response = await setDataContract.getTotalOwnedTokens(account);
//         let metaDataURI = response[response.length - 1];
//         const getMetaData = async () => {
//           const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmaavyzfX6XzVNJx4zKCQVNDJWwQJx9xUC6gmDfddxvQ6p/${metaDataURI}.json`);
//           console.log("if문 안", response.data)
//           dispatch({ type: "GET_PRE_MINTDATA", payload: { premintdata: response.data } })
//         }
//         getMetaData();
//       }

//       setHash(response.hash)
//       getStatus(hash);
//       useEffect(() => {
//         getStatus(hash);
//       },[hash.status])
      
//     } catch (error) { 
//     console.log(error)
//   }
// }

export const preMintingAction = { preMintAction }