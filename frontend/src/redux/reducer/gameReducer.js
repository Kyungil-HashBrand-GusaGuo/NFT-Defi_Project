let initialState = {
    clearHangmanGame : false,
}

function gameReducer(state=initialState,action) {
    let {type, payload} = action

    switch(type) {
        case "CLEAR_HANGMAN_GAME" :
            return {...state, clearHangmanGame : payload.clearHangmanGame}



        default :
            return {...state}
    }
}   

export default gameReducer