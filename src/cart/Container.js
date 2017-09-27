import Articles from './stores/Articles';
import Selection from './stores/Selection';
import { Container } from 'flux/utils';
import { Component } from 'react';

class Cart extends Component {
  static getStores() {
    return [
      Articles,
      Selection
    ];
  }
  static calculateState() {
    return {
      articles: Articles.getState(),
      selection: Selection.getState()
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
        ? _getStores() 
        : [];
      return stores.concat(Cart.getStores());
    };
    const calculateState = function() {
      const state = 'function' === typeof(_calculateState)
        ? _calculateState() 
        : {};
      return Object.assign({}, state, Cart.calculateState());
    };
    return Container.createFunctional(component, getStores, calculateState);
  }
};
