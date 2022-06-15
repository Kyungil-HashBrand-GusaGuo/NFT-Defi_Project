import axios from "axios";

function stakingViewAct(account) {
    return async (dispatch) => {
        try {
            if(account !== ''){
                const myNftListApi = await axios.post("http://34.64.61.199:9495/block/getExceptSellOwnedJolamanType", { account });
                const stakingNftApi = await axios.post("http://34.64.61.199:9495/block/stakedJolaman", { account });
                const stakingRewardApi = await axios.post("http://34.64.61.199:9495/block/updateReward", { account });
                const getStakingRewardApi = await axios.post("http://34.64.61.199:9495/block/stakers", { account });

                let [ myNftList, stakingNft, stakingReward, getStakingReward ] = await Promise.all([myNftListApi, stakingNftApi, stakingRewardApi, getStakingRewardApi ])
                console.log("나의 NFT목록",myNftList.data)
                console.log("스테이킹 NFT",stakingNft.data)
                console.log("받을 스테이킹 리워드",stakingReward.data)
                console.log("받은 스테이킹 리워드",getStakingReward.data.rewardsReleased)

                dispatch({
                    type : "GET_STAKING_VIEW_SUCCESS",
                    payload : { 
                        myNftList : myNftList.data, 
                        stakingNft : stakingNft.data, 
                        stakingReward : stakingReward.data, 
                        getStakingReward : getStakingReward.data.genres
                    }
                })
            }
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const stakingViewAction = {stakingViewAct}