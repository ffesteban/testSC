import React, { Component } from 'react';
import '../../styles/item.css';

const ItemProduct = ({item, addItem}) => {
    return (
        <div className="Item">
            <img src={item.Image} className="ImageItem" alt="" />
            <hr className="ItemLine"></hr>
            <h3 className="ItemDescription">{item.Description}</h3>
            
            <h4 className="ItemPrice">${item.Price}</h4>
            <br/>
            <button className="btn btn-success ItemButton" onClick={() => addItem(item)}><span className="glyphicon glyphicon-shopping-cart"></span>&nbsp;Add Item</button>
        </div>
    );
}

const ItemsProducts = ({data, addItem}) => {
    return (
        <div className="ItemsProducts">
        <h1>Men Clothing</h1>
            {data.map((element) =>
                <ItemProduct item={element} key={element.Id} addItem={addItem} />
            )}
        </div>
    );
};

const ItemsCounter = ({counter}) => {
    return (
        <div className="">
            <span className="glyphicon glyphicon-shopping-cart ItemCounter">&nbsp;{counter}</span>
        </div>
    );
};

class Item extends Component {
  render() {
    return (
        <div>
            <ItemsCounter counter={this.props.itemCounter} />
            
            <ItemsProducts data={this.props.data} addItem={this.props.addItem} />
            
        </div>
    );
  }
}

export default Item;