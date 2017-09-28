import Articles from './stores/Articles';
import Selection from './stores/Selection';
import { Component } from 'react';
import { Container } from 'flux/utils';

class Cart extends Component {
  static getStores() {
    return [
      Articles,
      Selection
    ];
  }
  static calculateState() {
    const selection = Selection.getState();
    const articles = Articles.getState();
    return {
      articles,
      selection,
      isEmpty: !Selection.getState().size,
      foldSelection: (func, seed) => selection.reduce(
        (acc, { article, quantity }) => func(acc, article, quantity), 
        seed
      ),
      mapArticles: (f, ...args) => 
        articles.entrySeq().map(([key, article]) => f(key, article), ...args),
      mapSelection: (f, ...args) => 
        selection.entrySeq().map(([key, { quantity, article }]) => 
          f(key, quantity, article), ...args),
    };
  }
  render() {
    return <span />
  }
}

export const CartComponent = Container.create(Cart);

export default {
  CartComponent,
  createFunctional(component, _getStores, _calculateState) {
    const getStores = function() {
      const stores = 'function' === typeof(_getStores)
        ? _getStores() : [];
      return stores.concat(Cart.getStores());
    };
    const calculateState = function() {
      const state = 'function' === typeof(_calculateState)
        ? _calculateState() : {};
      return Object.assign({}, state, Cart.calculateState());
    };
    return Container.createFunctional(component, getStores, calculateState);
  }
};
