function swapModalAct(message) {
    
    return async (dispatch) => {
        try {
            if(message == "open"){
                // 일단 이부분은 stakingReducer로 보내고있음
                dispatch({
                    type: "CHANGE_SWAP_MODAL",
                    payload: { swapModalChange: true }
                })
            } else {
                dispatch({
                    type: "CHANGE_SWAP_MODAL",
                    payload: { swapModalChange: false }
                })
            }
          } catch (error){
            console.error(error);
          }
    }
}

export const swapModalAction = {swapModalAct}