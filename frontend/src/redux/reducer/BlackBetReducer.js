import { ADD_CHIP, BET_CHIP, TAKE_CHIP } from '../actions/BlackBetAction';
import { HIT } from '../actions/BlackCardAction';


const initialState = {
  total: 250,
  bet: 0,
  playerCards: [],
};

function blackjackReducer(state = initialState, action = {}) {
  switch (action.type) {
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
    
    default:
      return state;
  }
};

export default blackjackReducer
