import axios from "axios";

function rewardEditionSetAct(arr) {
  
    console.log("확인", arr)  

  return async (dispatch) => {
        try {
            dispatch({
              type:"SET_AIRDROP_REWARD_SUCCESS", 
              payload : {setAirdropRewardSuccess : true},
            })
            const setRewardApi = await axios.post("http://localhost:9495/data/setrewardedition", { editionNumber : arr})

          } catch(error) {
            console.error(error);
          }
    }
}

export const rewardEditionSetAction = {rewardEditionSetAct}