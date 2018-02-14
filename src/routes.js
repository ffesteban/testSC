import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Items from './Components/Items/item';
import Checkout from './Components/Checkout/checkout';
import shopData from './temporaryData';
import toastr from 'toastr';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
          items: shopData,
          itemsCounter: 0,
          subtotal: 0,
          tax: 0,
          total: 0,
          cart: []
        }
    }

    addItemToCart = (item) => {
        if(!this.state.cart.includes(item)){
            this.setState({
                itemsCounter: this.state.itemsCounter + 1,
                subtotal: this.state.subtotal + item.Price,
                tax: this.state.subtotal + item.Price > 100 ? 0 : 5,
                total: this.state.subtotal + item.Price + (this.state.subtotal + item.Price > 100 ? 0 : 5),
                cart: this.state.cart.concat(item)
            });
            toastr.success('Item Added');
        }else{
            toastr.error('Item already in the Bag');
        }
    }

    removeItem = (item) => {
        this.setState({
            itemsCounter: this.state.itemsCounter - 1,
            subtotal: this.state.subtotal - item.Price,
            tax: this.state.subtotal - item.Price > 100 || this.state.subtotal - item.Price < 1 ? 0 : 5,
            total: this.state.subtotal - item.Price + (this.state.subtotal + item.Price > 100 || this.state.subtotal - item.Price < 1 ? 0 : 5),
            cart: this.state.cart.filter(cartItem => cartItem.Id !== item.Id)
        })
    }

    render(){
        return(
            <Switch>
                <Route path="/men">
                    <Items data={shopData} addItem={this.addItemToCart} itemCounter={this.state.itemsCounter} />
                </Route>
                <Route path="/checkout">
                    <Checkout data={this.state.cart} removeItem={this.removeItem} 
                    subtotal={this.state.subtotal} itemsCounter={this.state.itemsCounter} 
                    tax={this.state.tax} total={this.state.total}/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;