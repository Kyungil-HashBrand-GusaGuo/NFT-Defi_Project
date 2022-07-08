import api from '../api'
import pinataApi from "../pinataApi"

function collectionAct() {

    return async (dispatch) => {
        try {

          const response = await api.get("/block/totalJolamanData")
          
          let array = []
          let allMintingData = response.data
          // 액션
          for(let i=0; i < allMintingData.length; i++){
              
              const mintJSON = await pinataApi.get(`/${allMintingData[i]}.json`)
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