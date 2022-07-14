import api from "../api"; /* contracts */

function blackjackGameAct(title, bet,account) {
    console.log(title)
    console.log(bet)
    return async (dispatch) => {
        try {
            // console.log("계정확인", account)
            // console.log("배팅금액", bet)
            // console.log("title", title)
            
           if((title === "Bust!") || (title === "Dealer Win!")) {
                console.log(title,"짐")
                const loseBlackJackGame = await api.post("/block/blackJackLose", {account, betPrice:bet })
                const loseBackBlack = await api.post("/data/player", {account, point : 2})

           } else if (title === "Tie!") {
                console.log(title,"비김")
                const tieBackBlack = await api.post("/data/player", {account, point : 3})

           } else if ((title === "You Win!") || (title === "Blackjack!")) {
                console.log(title,"이김")
                const winBlackJackGame = await api.post("/block/blackJackWin", {account, betPrice:bet*2 })
                const winBackBlack = await api.post("/data/player", {account, point : 5})
           }  
        } catch (error) {
            console.log(error);
        }
    }   
}

export const blackjackGameAction = {blackjackGameAct}