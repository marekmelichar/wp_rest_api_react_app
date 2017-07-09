import {
  ONE_TWO_THREE
} from '../actions/index';

let INITIAL_STATE = {

}

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ONE_TWO_THREE:
      return({
        ...state,
        A: action.test
      });
      break;
    
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
