import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Articles from './stores/Articles';

const Actions = {
  addItem(key, quantity, article) {
    const collection = Articles.getState();
    const found = collection.get(key);
    if (!article && found) {
      article = found;
    } else if (article && !found) {
      Dispatcher.dispatch({
        type: ActionTypes.INSERT_ARTICLE,
        key,
        article
      });
    }
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      key,
      quantity,
      article
    });
  },
  removeItem(key) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      key
    });
  },
  updateItem(key, quantity, article) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_ITEM,
      key,
      quantity,
      article
    });
  },
  emptyCart() {
    Dispatcher.dispatch({
      type: ActionTypes.EMPTY
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
