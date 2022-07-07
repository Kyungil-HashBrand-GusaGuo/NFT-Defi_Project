let initialState = {
    clearHangmanGame : false,
    hangmanRewardGZLT : null,
    hangmanRewardGP : null,
    gamePointRank : [],
    setAirdropRewardSuccess : false,
    airdropReward : []
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

        case "GET_GAMEPOINT_RANK" :
            return {...state, 
                gamePointRank : payload.gamePointRank,
            }

        case "SET_AIRDROP_REWARD_SUCCESS" :
            return {...state, 
                setAirdropRewardSuccess : payload.setAirdropRewardSuccess,
            }

        case "GET_AIRDROP_REWARD" :
            return {...state, 
                airdropReward : payload.airdropReward,
            }

        default :
            return {...state}
    }
}   

export default gameReducer