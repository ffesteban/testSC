import React, { Component } from 'react';
import OrderSummary from '../../Components/OrderSummary/ordersummary';
import '../../styles/checkout.css';

const CheckoutItem = ({item, removeItem}) => {
    return (
        <tr>
            <td><img src={item.Image} className="CheckoutImageItem" alt="" /></td>
            <td>{item.Description}</td>
            <td>$&nbsp;{item.Price}</td>
            <td><button className="btn btn-warning" onClick={() => removeItem(item)}><span className="glyphicon glyphicon-remove-sign"></span>&nbsp;Remove Item</button></td>
        </tr>
    );
}

const CheckoutList = ({data, removeItem}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Desctiption</th>
                    <th>Price</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {data.map((element) =>
                    <CheckoutItem item={element} key={element.Id} removeItem={removeItem}/>
                )}
            </tbody>
        </table>
    );
};

class Checkout extends Component {
  render() {
    return (
        
        <div className="container">
            <div className="row">
                <div className="span9">
                    <h1>Checkout</h1>
                    <CheckoutList data={this.props.data} removeItem={this.props.removeItem}/>
                </div>
                <div className="span3">
                    <OrderSummary subtotal={this.props.subtotal} itemsCounter={this.props.itemsCounter} 
                    tax={this.props.tax} total={this.props.total}/>
                </div>
            </div>
        </div>
    );
  }
}

export default Checkout;


