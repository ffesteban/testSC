import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ordersummary.css';

const OrderSummary = ({
  subtotal, itemsCounter, tax, total,
}) => (
  <table className="table table-striped table-bordered ordersummary" >
    <thead>
      <tr>
        <td>Order Summary</td>
        <td />
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

OrderSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  itemsCounter: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderSummary;
