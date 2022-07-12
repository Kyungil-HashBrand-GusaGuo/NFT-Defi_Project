import api from "../api"

function rewardEditionGetAct() {
  
    //console.log("확인", arr)  

  return async (dispatch) => {
        try {
            const getRewardApi = await api.get("/data/getrewardedition")
            console.log("확인", getRewardApi.data)

            dispatch({
                type:"GET_AIRDROP_REWARD", 
                payload : {airdropReward : getRewardApi.data}
            })

          } catch(error) {
            console.error(error);
          }
    }
}

export const rewardEditionGetAction = {rewardEditionGetAct}