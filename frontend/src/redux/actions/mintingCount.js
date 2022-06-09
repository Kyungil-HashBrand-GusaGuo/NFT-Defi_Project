import { RandomJolamanContract } from "../../caverConfig";
import axios from "axios";

function mintCount() {

    return async (dispatch) => {
        try {
                // const MAX_NORMAL_TOKEN_COUNT = RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call()
                const MAX_NORMAL_TOKEN_COUNT = await axios.get("http://34.64.61.199:9495/block/normalAll")
            
                const MAX_SPECIAL_TOKEN_COUNT = await axios.get("http://34.64.61.199:9495/block/specialAll")

                const NORMAL_TOKEN_COUNT = await axios.get("http://34.64.61.199:9495/block/normalCurrent")

                const SPECIAL_TOKEN_COUNT = await axios.get("http://34.64.61.199:9495/block/specialCurrent")

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