import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/item.css';

const ItemProduct = ({ item, addItem }) => (
  <div className="Item">
    <img src={item.Image} className="ImageItem" alt="" />
    <hr className="ItemLine" />
    <h3 className="ItemDescription">{item.Description}</h3>

    <h4 className="ItemPrice">${item.Price}</h4>
    <br />
    <button className="btn btn-success ItemButton" onClick={() => addItem(item)}>
      <span className="glyphicon glyphicon-shopping-cart" />&nbsp;Add Item
    </button>
  </div>
);

const ItemsProducts = ({ data, addItem }) => (
  <div className="ItemsProducts">
    <h1>Men Clothing</h1>
    {data.map(element =>
      <ItemProduct item={element} key={element.Id} addItem={addItem} />)}
  </div>
);

const ItemsCounter = ({ counter }) => (
  <div className="">
    <span className="glyphicon glyphicon-shopping-cart ItemCounter">&nbsp;{counter}</span>
  </div>
);

const Item = ({ itemsCounter, data, addItem }) => (
  <div>
    <ItemsCounter counter={itemsCounter} />
    <ItemsProducts data={data} addItem={addItem} />
  </div>
);

ItemProduct.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  addItem: PropTypes.func.isRequired,
};

ItemsProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
};

ItemsCounter.propTypes = {
  counter: PropTypes.number.isRequired,
};

Item.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
  itemsCounter: PropTypes.number.isRequired,
};

export default Item;
