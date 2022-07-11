import { ADD_CHIP, BET_CHIP, TAKE_CHIP } from '../actions/BlackBetAction';
import { HIT } from '../actions/BlackCardAction';


const initialState = {
  total: 10,
  bet: 0,
  playerCards: [],
  winBlackJackGame : true,
  loseBlackJackGame : true
};

function blackjackReducer(state = initialState, action = {}) {
  let{ payload } = action
  switch (action.type , payload) {
    case ADD_CHIP:
      return Object.assign({}, state, {
        bet: state.bet + action.payload,
        total: state.total - action.payload,
      });
    case BET_CHIP:
      return Object.assign({}, state, {
        bet: 0,
      });
    case TAKE_CHIP:
      return Object.assign({}, state, {
        total: state.total + action.payload,
        bet: 0,
      });
    case HIT:
      return Object.assign({}, state, {
        playerCards: state.playerCards.concat(action.payload),
      });

    case "WIN_BLACKJACK_GAME" :
        return {...state, winBlackJackGame : payload.winBlackJackGame }
    
    case "LOSE_BLACKJACK_GAME" :
        return {...state, loseBlackJackGame : payload.loseBlackJackGame }

    
    default:
      return state;
  }
};

export default blackjackReducer
