import { ReduceStore } from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';
import Immutable from 'immutable';

class Selection extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }
  getInitialState() {
    return Immutable.Map();
  }
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_ITEM:
        if (!action.key) {
          return state;
        }
        const current = state.has(action.key) 
          ? state.get(action.key)
          : { article: action.article, quantity: 0 };
        return state.set(action.key, {
          article: action.article || current.article,
          quantity: current.quantity + (action.quantity || 1)
        });
      case ActionTypes.INITIALIZE:
        return state;
      case ActionTypes.REVERT:
        return state;
      case ActionTypes.REMOVE_ITEM:
        if (!action.key) {
          return state;
        }
        return state.remove(action.key);
      case ActionTypes.UPDATE_ITEM:
        return state;
      case ActionTypes.RESET:
        return state;
      default:
        return state;
    }
  }
}

export default new Selection();
