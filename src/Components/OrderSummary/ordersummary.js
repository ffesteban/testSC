import React, { Component } from 'react';
import '../../styles/ordersummary.css';

const Order = ({subtotal, itemsCounter, tax, total}) => {
    return (
        <table className="table table-striped table-bordered ordersummary" >
        <thead>
            <tr>
                <td>Order Summary</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Items:</td>
                <td>&nbsp;{itemsCounter}</td>
            </tr>
            <tr>
                <td>SubTotal:</td>
                <td>$&nbsp;{subtotal}</td>
            </tr>
            <tr>
                <td>Tax:</td>
                <td>$&nbsp;{tax}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>$&nbsp;{total}</td>
            </tr>
            </tbody>
        </table>
    );
};

class OrderSummary extends Component {
  render() {
    return (
        <Order subtotal={this.props.subtotal} itemsCounter={this.props.itemsCounter}
        tax={this.props.tax} total={this.props.total} />
    );
  }
};

export default OrderSummary;