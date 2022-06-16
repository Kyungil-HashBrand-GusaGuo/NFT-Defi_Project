import axios from "axios";

function stakingViewAct(account) {
    return async (dispatch) => {
        try {
            if(account !== ''){
                const myNftListApi = axios.post("http://localhost:9495/block/getExceptSellOwnedJolamanType", { account });
                const stakingNftApi = axios.post("http://localhost:9495/block/stakedJolaman", { account });
                const stakingRewardApi = axios.post("http://localhost:9495/block/updateReward", { account });
                const getStakingRewardApi = axios.post("http://localhost:9495/block/stakers", { account });

                let [ myNftList, stakingNft, stakingReward, getStakingReward ] = await Promise.all([myNftListApi, stakingNftApi, stakingRewardApi, getStakingRewardApi ])

                //console.log(stakingNft.data[0])
                let stakingNftNumberData = []

                for(let i=0; i < stakingNft.data.length; i++){ 
                    let data = Number(stakingNft.data[i])
                    stakingNftNumberData.push(data)
                  }

                console.log("나의 NFT목록",myNftList.data)
                //console.log("스테이킹 NFT",stakingNft.data)
                console.log("스테이킹 NFT",stakingNftNumberData)
                console.log("받을 스테이킹 리워드",stakingReward.data / 10**18)
                console.log("받은 스테이킹 리워드",getStakingReward.data.rewardsReleased / 10**18)

                dispatch({
                    type : "GET_STAKING_VIEW_SUCCESS",
                    payload : { 
                        myNftList : myNftList.data, 
                        stakingNftString : stakingNft.data,
                        stakingNftNumber : stakingNftNumberData, 
                        stakingReward : stakingReward.data / 10**18, 
                        getStakingReward : getStakingReward.data.rewardsReleased / 10**18
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