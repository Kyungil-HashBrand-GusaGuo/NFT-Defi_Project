import api from "../api"

function timerPostAct() {
    return async (dispatch) => {
        let arr = []
        try {
            const setRewardApi = await api.post("/data/setrewardedition", { editionNumber : arr })
            console.log("edition 삭제 완료")
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerPostAction = {timerPostAct}