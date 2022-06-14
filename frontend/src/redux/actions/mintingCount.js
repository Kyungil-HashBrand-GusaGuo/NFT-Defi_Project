import { RandomJolamanContract } from "../../ropstenConfig";

import axios from "axios";

function mintCount() {
    const api = "http://localhost:9495"
    return async (dispatch) => {
        try {
                // const MAX_NORMAL_TOKEN_COUNT = RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call()
                const MAX_NORMAL_TOKEN_COUNT = await axios.get(api+"/block/normalAll")
            
                const MAX_SPECIAL_TOKEN_COUNT = await axios.get(api+"/block/specialAll")

                const NORMAL_TOKEN_COUNT = await axios.get(api+"/block/normalCurrent")

                const SPECIAL_TOKEN_COUNT = await axios.get(api+"/block/specialCurrent")

                let [ maxNormalTokenCount, maxSpecialTokenCount, normalTokenCount, specialTokenCount ] = await Promise.all([MAX_NORMAL_TOKEN_COUNT.data, MAX_SPECIAL_TOKEN_COUNT.data, NORMAL_TOKEN_COUNT.data, SPECIAL_TOKEN_COUNT.data])
                // console.log("MAX_NORMAL_TOKEN_COUNT",maxNormalTokenCount)
                // console.log("MAX_SPECIAL_TOKEN_COUNT",maxSpecialTokenCount)
                // console.log("NORMAL_TOKEN_COUNT",normalTokenCount)
                // console.log("SPECIAL_TOKEN_COUNT",specialTokenCount)
                
                dispatch({
                    type : "GET_ALL_TOKENCOUNT",
                    payload : { 
                        maxNormalTokenCount : maxNormalTokenCount, 
                        maxSpecialTokenCount : maxSpecialTokenCount, 
                        normalTokenCount : normalTokenCount, 
                        specialTokenCount : specialTokenCount
                    }
                })

          } catch (error){
            console.error(error);
          }
    }
}

export const mintingCount = {mintCount}