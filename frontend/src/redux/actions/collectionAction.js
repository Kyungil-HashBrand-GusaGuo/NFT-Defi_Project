import axios from "axios"

function collectionAct() {

    return async (dispatch) => {
        try {

          const response = await axios.get("http://34.64.61.199:9495/block/totalJolamanData")
          
          let array = []
          let allMintingData = response.data
          // 액션
          for(let i=0; i < allMintingData.length; i++){
              
              const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${allMintingData[i]}.json`)
              // console.log(mintJSON)
              // console.log(mintJSON.data.name)
              array.push(mintJSON)
          }
            console.log(array)
            dispatch({type: "GET_ALL_MINTDATA", payload : { allmintdata : array }})

          } catch (error){
            console.error(error);
          }
    }
}

export const collectionAction = {collectionAct}