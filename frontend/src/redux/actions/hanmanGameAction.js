import api from "../api";

function hanmanGameAct(account, wrongLetter) {
    
    return async (dispatch) => {
        //console.log("game 모달 실행됨")
        try {
            console.log("계정확인",account)
            console.log("틀린거확인",wrongLetter)
            const response = await api.post("/hangmangamereward", {account, wrongLetter});
            
            if(response.status) {
                dispatch({
                    type: "CLEAR_HANGMAN_GAME",
                    payload: { clearHangmanGame: true }
                })
            }
          } catch (error){
            console.error(error);
            // 페이지 리로드
          }
    }
}

export const hanmanGameAction = {hanmanGameAct}