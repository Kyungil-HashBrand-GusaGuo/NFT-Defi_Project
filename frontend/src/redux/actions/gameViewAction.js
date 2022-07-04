import axios from 'axios';
import api from '../api'

function gameViewAct(account) {
    return async (dispatch) => {
        try {
                const getGamePointApi = await axios.get("http://localhost:9495/data/gameRank");
                console.log("게임랭크 GET요청",getGamePointApi.data)

                let rankArr = []
                for(let i=0; i<5; i++){
                    rankArr.push(getGamePointApi.data[i])
                }

                console.log(rankArr)
                dispatch({
                    type : "GET_GAMEPOINT_RANK",
                    payload : { 
                        gamePointRank : rankArr
                    }
                })
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const gameViewAction = {gameViewAct}