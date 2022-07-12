import api from "../api";

function gameViewAct(account) {
    return async (dispatch) => {
        try {
                const getGamePointApi = await api.get("/data/gameRank");
                console.log("게임랭크 GET요청",getGamePointApi.data)

                let rankAllArr = []

                for(let i=0; i<5; i++){
                    rankAllArr.push(getGamePointApi.data[i])
                }

                if(rankAllArr[0] === undefined){
                    let rankArr = []
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                } else if(rankAllArr[1] === undefined) {
                    let rankArr = [rankAllArr[0]]
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                } else if(rankAllArr[2] === undefined) {
                    let rankArr = [rankAllArr[0],rankAllArr[1]]
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                } else if(rankAllArr[3] === undefined) {
                    let rankArr = [rankAllArr[0],rankAllArr[1],rankAllArr[2]]
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                } else if(rankAllArr[4] === undefined) {
                    let rankArr = [rankAllArr[0],rankAllArr[1],rankAllArr[2],rankAllArr[3]]
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                } else {
                    let rankArr = [rankAllArr[0],rankAllArr[1],rankAllArr[2],rankAllArr[3],rankAllArr[4]]
                    return dispatch({
                        type : "GET_GAMEPOINT_RANK",
                        payload : { 
                            gamePointRank : rankArr
                        }
                    })
                }
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const gameViewAction = {gameViewAct}