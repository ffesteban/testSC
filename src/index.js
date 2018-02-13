import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import Item from './Components/Items/item';
//import Nav from './Components/header/nav';
// import HomePage from './Components/Home/home';
import registerServiceWorker from './registerServiceWorker';
import Nav from './Components/header/nav';

const app = (
        <BrowserRouter>
            <Nav />
        </BrowserRouter>

);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();