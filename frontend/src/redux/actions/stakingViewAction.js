import api from '../api'

function stakingViewAct(account) {
    return async (dispatch) => {
        try {
            if(account !== ''){
                const myNftListApi = api.post("/getExceptSellOwnedJolamanType", { account });
                const stakingNftApi = api.post("/stakedJolaman", { account });
                const stakingRewardApi = api.post("/updateReward", { account });
                const getStakingRewardApi = api.post("/stakers", { account });
                const getKlayBalanceApi = api.post("/balanceKlay", { account });
                const getTokenBalanceApi = api.post("/balanceOf", { account });
                const getGameTokenBalanceApi = api.post("/balanceOfGZLT", {account})               

                let [ myNftList, stakingNft, stakingReward, getStakingReward, getKlayBalance, getTokenBalance, getGameTokenBalance ] = await Promise.all([myNftListApi, stakingNftApi, stakingRewardApi, getStakingRewardApi, getKlayBalanceApi, getTokenBalanceApi, getGameTokenBalanceApi ])
                
                let stakingNftNumberData = []

                for(let i=0; i < stakingNft.data.length; i++){ 
                    let data = Number(stakingNft.data[i])
                    stakingNftNumberData.push(data)
                  }

                console.log("나의 NFT목록",myNftList.data)
                console.log("스테이킹 NFT",stakingNftNumberData)
                console.log("받을 스테이킹 리워드",stakingReward.data / 10**18)
                console.log("받은 스테이킹 리워드",getStakingReward.data.rewardsReleased / 10**18)
                console.log("클레이밸런스 확인",Number(getKlayBalance.data) / 10**18)
                console.log("토큰밸런스 확인 : ", getTokenBalance.data / 10**18);
                console.log("게임토큰밸런스 확인 : ", getGameTokenBalance.data / 10**18);
                

                dispatch({
                    type : "GET_STAKING_VIEW_SUCCESS",
                    payload : { 
                        myNftList : myNftList.data, 
                        stakingNftString : stakingNft.data,
                        stakingNftNumber : stakingNftNumberData, 
                        stakingReward : (stakingReward.data / 10**18).toFixed(3),
                        getStakingReward : (getStakingReward.data.rewardsReleased / 10**18).toFixed(3),
                        getKlayBalance : (Number(getKlayBalance.data) / 10**18).toFixed(3), // klay라서 이렇게 하는게 맞을려나 모르겠다(내 돈이 버려지는거니까)
                        getTokenBalance : getTokenBalance.data / 10**18,
                        getGameTokenBalance : getGameTokenBalance.data / 10**18
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