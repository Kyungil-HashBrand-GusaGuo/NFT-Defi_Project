let initialState = {
    clearHangmanGame : false,
    hangmanRewardGZLT : null,
    hangmanRewardGP : null
}

function gameReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "CLEAR_HANGMAN_GAME" :
            return {...state, clearHangmanGame : payload.clearHangmanGame}

        case "GET_HANGMAN_GAME_REWARD" :
            return {...state, 
                hangmanRewardGZLT : payload.hangmanRewardGZLT,
                hangmanRewardGP : payload.hangmanRewardGP
            }

        default :
            return {...state}
    }
}   

export default gameReducer