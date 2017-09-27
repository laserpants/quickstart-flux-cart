import { ReduceStore } from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';
import Immutable from 'immutable';

class Selection extends ReduceStore {
  constructor() {
    super(Dispatcher);
    this.initialSelection = Immutable.Map();
  }
  getInitialState() {
    return Immutable.Map();
  }
  validateQuantity(qty) {
    if ('number' !== typeof(qty) || qty < 0) {
      return false;
    }
    return Number.parseInt(qty);
  }
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_ITEM: {
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
      }
      case ActionTypes.RESET:
        return this.initialSelection;
      case ActionTypes.REMOVE_ITEM:
        if (!action.key) {
          return state;
        }
        return state.remove(action.key);
      case ActionTypes.UPDATE_ITEM: {
        if (!action.key || !state.has(action.key)) {
          return state;
        }
        const current = state.get(action.key);
        const quantity = this.validateQuantity(action.quantity);
        if (0 === quantity) {
          return state.remove(action.key);
        } 
        return state.set(action.key, {
          article: action.article || current.article,
          quantity: quantity || current.quantity
        });
      }
      case ActionTypes.EMPTY:
        return Immutable.Map();
      case ActionTypes.INITIALIZE:
        if (action.selection) {
          this.initialSelection = Immutable
          .Map(action.selection)
          .mapEntries(([key, item]) => {
            return [key, { 
              article: action.articles[key] || item.article, 
              quantity: item.quantity
            }];
          });
          return this.initialSelection;
        }
      default:
        return state;
    }
  }
}

export default new Selection();
