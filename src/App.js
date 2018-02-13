import React, { Component } from 'react';
import Nav from './Components/header/nav';
import './App.css';
//import shopData from './temporaryData';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hola</h1>
      </div>
    );
  }
}

export default App;


// class Logo extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//           <h1 className="App-title">Shopping Cart</h1>
//         </header>
//       </div>
//     );
//   }
// }

// class HeaderNav extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-inverse">
//     <div className="navbar-header">
//         <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//         </button>
//         <a href="#" className="navbar-brand"><img src={logo} className="App-logo" alt="logo" />TiquiTaca Clothing Shop</a>
//     </div>
//     <div id="navbarCollapse" className="collapse navbar-collapse">
//         <ul className="nav navbar-nav">
//             <li className="active"><a href="#">Home</a></li>
//             <li><a href="#">Profile</a></li>
//             <li className="dropdown">
//                 <a data-toggle="dropdown" className="dropdown-toggle" href="#">Messages <b className="caret"></b></a>
//                 <ul className="dropdown-menu">
//                     <li><a href="#">Inbox</a></li>
//                     <li><a href="#">Drafts</a></li>
//                     <li><a href="#">Sent Items</a></li>
//                     <li className="divider"></li>
//                     <li><a href="#">Trash</a></li>
//                 </ul>
//             </li>
//         </ul>

//         <ul className="nav navbar-nav navbar-right">
//             <li><a href="#">Login</a></li>
//         </ul>
//     </div>
// </nav>
//     );
//   }
// }

// class Navigation extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.data.Image} alt="" />
//       </div>
//     );
//   }
// }

// class Elements extends Component {
//   constructor(props){
//     super(props);
//     this.state = {size: this.props.data.length}
//   }
//   render(){
//     let rows = [];
//     for (var i = 0; i < this.state.size; i++){
//       let rowID;
//       let cell = [];
//       rowID = `row${i}`;
//       {this.props.data.map((element) =>
//         cell.push(<td><img src="images/Men/M03.jpg" className="ImageItem" alt="" /></td>),
//         cell.push(<td>Test</td>),
//         cell.push(<td>Hola</td>),
//         cell.push(<td>Hola</td>),
//         cell.push(<td>Hola</td>),
//         cell.push(<td>Hola</td>),

//         rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//     )}
//     }
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col s12 board">
//             <table className="table" id="simple-board">
//                <thead>
//                   <th></th>
//                   <th>Description</th>
//                   <th>Size</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th></th>
//                </thead>
//                <tbody>
//                  {rows}
//                </tbody>
//              </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }