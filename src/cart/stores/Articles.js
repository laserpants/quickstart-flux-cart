import { ReduceStore } from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';
import Immutable from 'immutable';

class Articles extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }
  getInitialState() {
    return Immutable.Map();
  }
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.INITIALIZE:
        return Immutable.Map(action.articles);
      case ActionTypes.INSERT_ARTICLE:
        if (!action.key || state.has(action.key)) {
          return state;
        }
        return state.set(action.key, action.article);
      default:
        return state;
    }
  }
}

export default new Articles();
