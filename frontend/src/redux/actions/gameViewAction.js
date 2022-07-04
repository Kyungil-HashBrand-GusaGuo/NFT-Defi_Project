import axios from 'axios';
import api from '../api'

function gameViewAct(account) {
    return async (dispatch) => {
        try {
                const getGamePointApi = await axios.get("http://localhost:9495/data/gameRank");
                console.log("게임랭크 GET요청",getGamePointApi.data)
                // const stakingNftApi = api.post("/stakedJolaman", { account });
                // const stakingRewardApi = api.post("/updateReward", { account });
                // const getStakingRewardApi = api.post("/stakers", { account });
                // const getKlayBalanceApi = api.post("/balanceKlay", { account });
                // const getTokenBalanceApi = api.post("/balanceOf", { account });
                // const getGameTokenBalanceApi = api.post("/balanceOfGZLT", {account})               

                //let [ myNftList, stakingNft, stakingReward, getStakingReward, getKlayBalance, getTokenBalance, getGameTokenBalance ] = await Promise.all([myNftListApi, stakingNftApi, stakingRewardApi, getStakingRewardApi, getKlayBalanceApi, getTokenBalanceApi, getGameTokenBalanceApi ])


                // dispatch({
                //     type : "GET_STAKING_VIEW_SUCCESS",
                //     payload : { 

                //     }
                // })
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const gameViewAction = {gameViewAct}