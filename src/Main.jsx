import Actions from './cart/Actions';
import { ReduceStore } from 'flux/utils';
import Dispatcher from './cart/Dispatcher';
import Cart, { CartComponent } from './cart/Container';
import { Container } from 'flux/utils';
import React, { Component } from 'react';

class SSSSS extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }
  getInitialState() {
    return {};
  }
  reduce(state, action) {
    return state;
  }
}

const TTTT = new SSSSS();

// --

function addItem(key, ev) {
  ev.preventDefault();
  Actions.addItem(key);
}

function MyFunctionalComponent(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.articles.entrySeq().map(([key, article]) => 
          <li key={key}>
            <span>{article.Name}</span>
            <a href='#' onClick={ev => addItem(key, ev)}>Add</a>
          </li>
        )}
      </ul>
      <h2>Cart items</h2>
      <ul>
        {props.selection.entrySeq().map(([key, article]) => 
          <li key={key}>
            <span>{article.Name}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

class MyComponent extends CartComponent {
  static getStores() {
    return [TTTT];
  }
  static calculateState() {
    return {x: TTTT.getState()};
  }
  render() {
    const { articles, selection } = this.state;
    console.log(this.state);
    return (
      <div>
        <ul>
          {articles.entrySeq().map(([key, article]) => 
            <li key={key}>
              <span>{article.Name}</span>
              <a href='#' onClick={ev => addItem(key, ev)}>Add</a>
            </li>
          )}
        </ul>
        <h2>Cart items</h2>
        <ul>
          {selection.entrySeq().map(([key, article]) => 
            <li key={key}>
              <span>{article.Name}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function a() {
  return [
    TTTT
  ];
}

function b() {
  return {x: TTTT.getState()};
}

const MyStore = Container.create(MyComponent);

const MyStoreComponent = Cart.createFunctional(MyFunctionalComponent, a, b);

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const products = {
      "product-1" : { "Name" : "Canned Unicorn Meat"   , "Price" : "9.99"  },
      "product-2" : { "Name" : "Disappearing Ink Pen"  , "Price" : "14.99" },
      "product-3" : { "Name" : "USB Rocket Launcher"   , "Price" : "29.99" },
      "product-4" : { "Name" : "Airzooka Air Gun"      , "Price" : "29.99" },
      "product-5" : { "Name" : "Star Trek Paper Clips" , "Price" : "19.99" }
    };
    Actions.initialize(products);
  }
  render() {
    return (
      <span>
        <MyStoreComponent />
        <MyStore />
      </span>
    );
  }
}