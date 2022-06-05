import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "../../caverConfig";
import axios from "axios";

function mintAction(account) {

    console.log(account)

    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
              from: account,
              to: MINT_CONTRACT_ADDRESS,
              value: caver.utils.convertToPeb(2, "KLAY"),
              gas: "3000000",
              data: RandomJolamanContract.methods.payandMint().encodeABI(),
            })
            console.log("if문 전",response)
            if(response.status) {
              const response = await RandomJolamanContract.methods.getLatestJolamanData().call()
              let metaDataURI = response; 
              const getMetaData = async() => {
                const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${metaDataURI}.json`);
                console.log( "if문 안",response.data)
                dispatch({type : "GET_MINTDATA", payload : {mintdata : response.data}})         
              }
              getMetaData();
            }

            

          } catch (error){
            console.error(error);
          }
    }
}

export const mintingAction = {mintAction}