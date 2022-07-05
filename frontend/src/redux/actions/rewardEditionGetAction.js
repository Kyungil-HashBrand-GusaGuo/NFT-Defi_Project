import axios from "axios";

function rewardEditionGetAct() {
  
    //console.log("확인", arr)  

  return async (dispatch) => {
        try {
            const getRewardApi = await axios.get("http://localhost:9495/data/getrewardedition")
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