import React, { Component } from 'react';
import shopData from '../../temporaryData';
import '../../App.css';

const ItemProduct = ({item}) => {
    return (
        <div className="Item">
            <img src={item.Image} className="ImageItem" alt="" />
            <h3>{item.Description}</h3>
            <span>Price: ${item.Price}</span>
            <br/>
            <button className="btn btn-success">Test</button>
        </div>
    );
}

const ItemsProducts = ({data}) => {
    return (
        <div className="ItemsProducts">
            <h1>Men's Clothing</h1>
            {data.map((element) =>
                <ItemProduct item={element} key={element.Id}/>
            )}
        </div>
    );
};

class Item extends Component {
  render() {
    return (
        <div>
            <h1>TestingItem</h1>
            <ItemsProducts data={shopData} />
        </div>
    );
  }
}

export default Item;