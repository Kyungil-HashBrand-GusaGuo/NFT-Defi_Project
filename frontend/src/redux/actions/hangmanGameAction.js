import api from "../api";

function hangmanGameAct(account, wrongLetter) {
    
    return async (dispatch) => {
        //console.log("game 모달 실행됨")
        try {
            // console.log("계정확인",account)
            // console.log("틀린거확인",wrongLetter)
            const response = await api.post("/block/hangmangamereward", {account, wrongLetter});

            if(response.status) {
                dispatch({
                    type: "CLEAR_HANGMAN_GAME",
                    payload: { clearHangmanGame: true }
                })

                switch(wrongLetter){
                    case 0 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 6, hangmanRewardGP : 10}
                        }), await api.post("/data/player", {account, point : 10})
                    
                    case 1 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 5, hangmanRewardGP : 8}
                        }), await api.post("/data/player", {account, point : 8})
                    
                    case 2 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 4, hangmanRewardGP : 6}
                        }), await api.post("/data/player", {account, point : 6})
                    
                    case 3 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 3, hangmanRewardGP : 4}
                        }), await api.post("/data/player", {account, point : 4})
                    
                    case 4 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 2, hangmanRewardGP : 2}
                        }), await api.post("/data/player", {account, point : 2})
                    
                    case 5 :
                        return dispatch({
                            type: "GET_HANGMAN_GAME_REWARD",
                            payload: { hangmanRewardGZLT: 1, hangmanRewardGP : 1}
                        }), await api.post("/data/player", {account, point : 1})
                    
                    default :
                        return null
                }
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const hangmanGameAction = {hangmanGameAct}