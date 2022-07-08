import axios from 'axios'

function timerPostAct() {
    return async (dispatch) => {
        let arr = []
        try {
            const setRewardApi = await axios.post("http://localhost:9495/data/setrewardedition", { editionNumber : arr })
            console.log("edition 삭제 완료")
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerPostAction = {timerPostAct}