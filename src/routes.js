import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import toastr from 'toastr';
import Items from './Components/Items/item';
import Checkout from './Components/Checkout/checkout';
import shopData from './temporaryData';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      itemsCounter: 0,
      subtotal: 0,
      tax: 0,
      total: 0,
      cart: [],
    };
  }

    addItemToCart = (item) => {
      if (!this.state.cart.includes(item)) {
        const sub = this.state.subtotal + item.Price;
        this.setState({
          itemsCounter: this.state.itemsCounter + 1,
          subtotal: sub,
          tax: sub > 100 ? 0 : 5,
          total: sub + (sub > 100 ? 0 : 5),
          cart: this.state.cart.concat(item),
        });
        toastr.success('Item Added');
      } else {
        toastr.error('Item already in the Bag');
      }
    }

    removeItem = (item) => {
      const sub = this.state.subtotal - item.Price;
      this.setState({
        itemsCounter: this.state.itemsCounter - 1,
        subtotal: sub,
        tax: sub > 100 || sub < 1 ? 0 : 5,
        total: sub + (sub > 100 || sub < 1 ? 0 : 5),
        cart: this.state.cart.filter(cartItem => cartItem.Id !== item.Id),
      });
    }

    render() {
      return (
        <Switch>
          <Route path="/men">
            <Items
              data={shopData}
              addItem={this.addItemToCart}
              itemsCounter={this.state.itemsCounter}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              data={this.state.cart}
              removeItem={this.removeItem}
              subtotal={this.state.subtotal}
              itemsCounter={this.state.itemsCounter}
              tax={this.state.tax}
              total={this.state.total}
            />
          </Route>
        </Switch>
      );
    }
}

export default Routes;