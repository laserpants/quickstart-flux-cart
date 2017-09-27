import Actions from './Actions';
import Container from './Container';

export const CartComponent = Container.CartComponent;

export default {
  CartComponent,
  createFunctional: Container.createFunctional,
  addItem: Actions.addItem,
  removeItem: Actions.removeItem,
  updateItem: Actions.updateItem,
  emptyCart: Actions.emptyCart,
  resetCart: Actions.resetCart,
  initialize: Actions.initialize
}
