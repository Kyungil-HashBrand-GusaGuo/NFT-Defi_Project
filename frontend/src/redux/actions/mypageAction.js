import axios from "axios"

function mypageAct(account) {

    return async (dispatch) => {
        try {
            console.log("액션쪽",account)
            if(account !== "")
            {
              const response = await axios.post("http://34.64.61.199:9495/block/ownedTokenId", { account : account });
              //const response = await setDataContract.methods.getTotalOwnedTokens(account).call()
              let array = []
              let editionArr = []
              let myMintingData = response.data
  
              for(let i=0; i < myMintingData.length; i++){
          
                const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmaavyzfX6XzVNJx4zKCQVNDJWwQJx9xUC6gmDfddxvQ6p/${myMintingData[i]}.json`)
                //console.log("여기 어대고",typeof(mintJSON.data.edition))
                array.push(mintJSON)
                editionArr.push(mintJSON.data.edition)
              }
              dispatch({type: "GET_MY_MINTDATA", 
                payload : {
                   mymintdata : array,
                   mymintEditionData : editionArr
                  }})
            }
            //console.log("액션다음",account)
            //console.log("내민팅확인",response);
          } catch (error){
            console.error(error);
          }
    }
}

export const mypageAction = {mypageAct}