import { RandomJolamanContract } from "../../caverConfig";

function mintCount() {

    return async (dispatch) => {
        try {
                const MAX_NORMAL_TOKEN_COUNT = RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call()
            
                const MAX_SPECIAL_TOKEN_COUNT = RandomJolamanContract.methods.MAX_SPECIAL_TOKEN_COUNT().call()

                const NORMAL_TOKEN_COUNT = RandomJolamanContract.methods._normalTokenIdCount().call()

                const SPECIAL_TOKEN_COUNT = RandomJolamanContract.methods._specialTokenIdCount().call()

                let [ maxNormalTokenCount, maxSpecialTokenCount, normalTokenCount, specialTokenCount ] = await Promise.all([MAX_NORMAL_TOKEN_COUNT, MAX_SPECIAL_TOKEN_COUNT, NORMAL_TOKEN_COUNT, SPECIAL_TOKEN_COUNT])
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