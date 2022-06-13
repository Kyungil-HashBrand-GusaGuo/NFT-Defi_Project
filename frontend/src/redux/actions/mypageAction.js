import axios from "axios"
import { setDataContract } from "../../caverConfig";


function mypageAct(account) {

    return async (dispatch) => {
        try {
            console.log("액션쪽",account)
            if(account !== "")
            {
              const response = await axios.post("http://34.64.61.199:9495/block/ownedTokenId", { account : account });
              //const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
              let array = []
              let myMintingData = response.data
  
              for(let i=0; i < myMintingData.length; i++){
          
                const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmXYi44PkJbNzH4nT13ZgEnKaibppUsfPCW4NpDigEBgXE/${myMintingData[i]}.json`)
                array.push(mintJSON)
              }
              console.log(array)
              dispatch({type: "GET_MY_MINTDATA", payload : { mymintdata : array}})
            }
            //console.log("액션다음",account)
            //console.log("내민팅확인",response);
          } catch (error){
            console.error(error);
          }
    }
}

export const mypageAction = {mypageAct}