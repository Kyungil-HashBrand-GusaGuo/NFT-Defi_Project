import axios from "axios"
import { setDataContract } from "../../caverConfig";


function mypageAct(account) {

    return async (dispatch) => {
        try {
            console.log("액션쪽",account)
            // const response = await axios.post("http://34.64.61.199:9495/block/ownedTokenId", { account : test });
            // console.log("account : ", account)
            const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
            console.log("액션다음",account)
            console.log("내민팅확인",response);

            let array = []
            let myMintingData = response

            for(let i=0; i < myMintingData.length; i++){
        
              const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${myMintingData[i]}.json`)
              array.push(mintJSON)
            }
            console.log(array)
            dispatch({type: "GET_MY_MINTDATA", payload : { mymintdata : array}})

          } catch (error){
            console.error(error);
          }
    }
}

export const mypageAction = {mypageAct}