import api from '../api'

function timerAct() {
    return async (dispatch) => {
        //console.log("액션 잘 됩니다")
        try {
            const timerApi = api.post("/airdropapprove")

            if(timerApi.status){
                const response = api.post("/airdrop", {
                  firstaccount : "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE", 
                  secondaccount : "0x663C6cBA85bA17d949F9d14232bDAEE5b543Bac0", 
                  thirdaccount : "0x9390FeF4821750A3FD704380C078D127C1de8dea", 
                  firstedition : 10002, 
                  secondedition : 700, 
                  thirdedition : 241
                })

                console.log("에어드랍성공")
            }
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerAction = {timerAct}