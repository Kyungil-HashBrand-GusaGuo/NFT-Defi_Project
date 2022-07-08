import api from '../api'

function mintCount() {

    return async (dispatch) => {
        try {
                const MAX_NORMAL_TOKEN_COUNT = api.get("/block/normalAll")
                const MAX_SPECIAL_TOKEN_COUNT = api.get("/block/specialAll")
                const NORMAL_TOKEN_COUNT = api.get("/block/normalCurrent")
                const SPECIAL_TOKEN_COUNT = api.get("/block/specialCurrent")

                let [ maxNormalTokenCount, maxSpecialTokenCount, normalTokenCount, specialTokenCount ] = await Promise.all([MAX_NORMAL_TOKEN_COUNT, MAX_SPECIAL_TOKEN_COUNT, NORMAL_TOKEN_COUNT, SPECIAL_TOKEN_COUNT])
                // console.log("MAX_NORMAL_TOKEN_COUNT",maxNormalTokenCount)
                // console.log("MAX_SPECIAL_TOKEN_COUNT",maxSpecialTokenCount)
                // console.log("NORMAL_TOKEN_COUNT",normalTokenCount)
                // console.log("SPECIAL_TOKEN_COUNT",specialTokenCount)
                
                dispatch({
                    type : "GET_ALL_TOKENCOUNT",
                    payload : { 
                        maxNormalTokenCount : maxNormalTokenCount.data, 
                        maxSpecialTokenCount : maxSpecialTokenCount.data, 
                        normalTokenCount : normalTokenCount.data, 
                        specialTokenCount : specialTokenCount.data
                    }
                })

                //dispatch({type: "CHANGE_MINTING_MODAL", payload : { mintModal : true }})

          } catch (error){
            console.error(error);
          }
    }
}

export const mintingCount = {mintCount}