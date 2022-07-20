import api from '../api'
import pinataApi from '../pinataApi';

function mypageAct(account) {

    return async (dispatch) => {
        try {
            // console.log("액션쪽",account)
            if(account !== "")
            {
              const response = await api.post("/block/ownedTokenId", { account : account });

              let array = []
              let editionArr = []
              let myMintingData = response.data
  
              for(let i=0; i < myMintingData.length; i++){
          
                const mintJSON = await pinataApi.get(`/${myMintingData[i]}.json`)
                array.push(mintJSON)
                editionArr.push(mintJSON.data.edition)
              }
              dispatch({type: "GET_MY_MINTDATA", 
                payload : {
                   mymintdata : array,
                   mymintEditionData : editionArr
                  }})
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const mypageAction = {mypageAct}