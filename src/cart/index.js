import Actions from './Actions';
import Container from './Container';
import Selection from './stores/Selection';

export const CartComponent = Container.CartComponent;

export default {
  CartComponent,
  createFunctional: Container.createFunctional,
  addItem: Actions.addItem,
  removeItem: Actions.removeItem,
  updateItem: Actions.updateItem,
  emptyCart: Actions.emptyCart,
  resetCart: Actions.resetCart,
  initialize: Actions.initialize,
  getSelection: () => {
    return Selection.getState().reduce((acc, { article, quantity }, key) => 
      acc.concat({ id: key, article, quantity }), []
    );
  }
}
