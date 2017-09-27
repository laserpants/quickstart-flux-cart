import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Articles from './stores/Articles';

const Actions = {
  addItem(key) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      key
    });
  },
  removeItem() {
  },
  updateItem() {
  },
  reset() {
    Dispatcher.dispatch({
      type: ActionTypes.RESET
    });
  },
  revert() {
    Dispatcher.dispatch({
      type: ActionTypes.REVERT
    });
  },
  initialize(data) {
    Dispatcher.dispatch({
      type: ActionTypes.INITIALIZE,
      data
    });
  }
};

export default Actions;
