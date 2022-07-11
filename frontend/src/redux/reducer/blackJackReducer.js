let initialState = {
    winBlackJackGame : true,
    loseBlackJackGame : true

}

function blackJackReducer(state = initialState,action ) {
    let{type, payload} = action

    switch(type) {
        case "WIN_BLACKJACK_GAME" :
            return {...state, winBlackJackGame : payload.winBlackJackGame }
        
        case "LOSE_BLACKJACK_GAME" :
            return {...state, loseBlackJackGame : payload.loseBlackJackGame }

        default :
            return {...state}
    }
}

export default blackJackReducer