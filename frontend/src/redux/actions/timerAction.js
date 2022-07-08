import api from '../api'
import axios from 'axios'

function timerAct(gamePointRank, airdropReward) {
    return async (dispatch) => {
        console.log("액션 잘 됩니다")
        console.log("1등 계정 : ", gamePointRank[0].account)
        console.log("2등 계정 : ", gamePointRank[1].account)
        console.log("3등 계정 : ", gamePointRank[2].account)
        console.log("1등 airdrop edition : ", airdropReward[0])
        console.log("2등 airdrop edition : ", airdropReward[1])
        console.log("3등 airdrop edition : ", airdropReward[2])
        console.log("1등 계정 : ", typeof(gamePointRank[0].account))
        console.log("2등 계정 : ", typeof(gamePointRank[1].account))
        console.log("3등 계정 : ", typeof(gamePointRank[2].account))
        console.log("1등 airdrop edition : ", typeof(airdropReward[0]))
        console.log("2등 airdrop edition : ", typeof(airdropReward[1]))
        console.log("3등 airdrop edition : ", typeof(airdropReward[2]))

        try {
            const timerApi = await api.post("/airdropapprove")

            if(timerApi.status){
                const response = api.post("/airdrop", {
                  firstaccount : gamePointRank[0].account, 
                  secondaccount : gamePointRank[1].account, 
                  thirdaccount : gamePointRank[2].account, 
                  firstedition : airdropReward[0], 
                  secondedition : airdropReward[1], 
                  thirdedition : airdropReward[2]
                })
                console.log("에어드랍 성공")
                let arr = []
                const setRewardApi = await axios.post("http://localhost:9495/data/setrewardedition", { editionNumber : arr})
                const getDeleteRankingTable = await axios.get("http://localhost:9495/data/reset")
                console.log("데이터삭제 완료")
            }
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerAction = {timerAct}