import { HIT } from '../actions/BlackCardAction';

const startedCards = {
  playerCards: [],
};

export const playerChoice = (state = startedCards, action) => {
  switch (action.type) {
    case HIT:
      return Object.assign({}, state, {
        playerCards: state.playerCards.concat(action.payload),
      });
    default:
      return state;
  }
};
