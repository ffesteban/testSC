import React, { Component } from 'react';
import Info from './pages/Info';
import Header from './components/Header';
import Cart from './components/Cart'
import News from './pages/News'
import Releases from './pages/Releases'
import Items from './components/Items';
import { Route, Switch } from 'react-router-dom'

import shopData from '../../temporaryData';


//container 
class App extends Component {

  constructor() {
    super();
    this.state = {
      items: shopData,
      count: 0,
      price: 0,
      Cart: []
    }
  }

  addCart = (price, item) => {
    //Change the state
    this.setState({
      count: this.state.count + 1,
      price: this.state.price + price,
      newCart: this.state.Cart.concat(item),
      newCartPrice: this.state.newCartPrice.concat(price)
    })
  }
  
  showInfo=(info)=>{
    this.setState({
      label: info
    }
    
    )
    console.log(this.state.label)
  }
  clearCart = () => {
    this.setState({
      count: 0,
      price: 0,
      game: null,
      newCart: [],
      newCartPrice: []

    })
  }
  toggleCart = () => {
    const doesShow = this.state.showCart;
    this.setState({ showCart: !doesShow });
  }
  //render objects 
  render() {

    let showed = null;
    let itemstoRender = null;
    let mapItemstoCart = null;
    let mapItemstoCartPrice = null;

    itemstoRender = (
      //Dinamic list of the objects 

      <div>

        {this.state.items.map((items, id) => {
           
          return <Items
            game={items.game}
            price={items.price}
            img={items.img}
            id={items.id}
            information={items.information}
            changed={this.addCart} 
            info={this.showInfo}/>

        })}

      </div>
    )


    mapItemstoCart = (
      this.state.newCart.map((x) => {
        return <tr><td>{x} </td></tr>
      })

    )
    mapItemstoCartPrice = (

      this.state.newCartPrice.map((y) => {
        return <tr><td>{y} </td></tr>
      })
    )

    showed = (
      <div className="container col-md-8 offset-md-2 card border-warning mb-3">
        <Cart newCart={mapItemstoCart} price={this.state.price} click={this.clearCart} acumPrice={mapItemstoCartPrice} />
      </div>
    )

    //Elements to return and Routing 
    return (
      <div>

        <Header counter={this.state.count} price={this.state.price} clicked={this.toggleCart
        } />
        

        <Switch >
          <Route path="/info">
        <Info information={this.state.label}/>
        </Route>
          <Route path="/bag">
            {showed}
          </Route>
          <Route  path="/shopcartReactNoRedux" >
            {itemstoRender}

          </Route>
          <Route path="/news">{News}</Route>
          <Route path="/releases" component={Releases} />

        </Switch>

      </div>
    );

  }
}

export default App;