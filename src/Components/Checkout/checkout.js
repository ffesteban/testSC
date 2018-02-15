import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../../Components/OrderSummary/ordersummary';
import '../../styles/checkout.css';

const CheckoutItem = ({ item, removeItem }) => (
  <tr>
    <td><img src={item.Image} className="CheckoutImageItem" alt="" /></td>
    <td>{item.Description}</td>
    <td>$&nbsp;{item.Price}</td>
    <td>
      <button className="btn btn-warning" onClick={() => removeItem(item)}>
        <span className="glyphicon glyphicon-remove-sign" />&nbsp;Remove Item
      </button>
    </td>
  </tr>
);

const CheckoutList = ({ data, removeItem }) => (
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
      {data.map(element =>
        <CheckoutItem item={element} key={element.Id} removeItem={removeItem} />)}
    </tbody>
  </table>
);

const Checkout = ({
  data, removeItem, subtotal, itemsCounter, tax, total,
}) => (
  <div className="container">
    <div className="row">
      <div className="span9">
        <h1>Checkout</h1>
        <CheckoutList data={data} removeItem={removeItem} />
      </div>
      <div className="span3">
        <OrderSummary
          subtotal={subtotal}
          itemsCounter={itemsCounter}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  </div>
);

CheckoutItem.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  removeItem: PropTypes.func.isRequired,
};

CheckoutList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
};

Checkout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  subtotal: PropTypes.number.isRequired,
  itemsCounter: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Checkout;

