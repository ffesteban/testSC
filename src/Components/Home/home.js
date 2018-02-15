import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

const HomeHeader = ({data}) => {
    return (
        <div className="HomeBody">
            <h1>TiquiTaca Clothing Shop</h1>
        </div>
    );
};

const HomeBody = ({data}) => {
    return (      
        <div className="HomeBody">
            <h1>HomeBody</h1>
            <Link to="/men">
                <div>
                    <h1>Men Clothing</h1>
                </div>
            </Link>
        </div>
    );
};

const HomeFooter = ({data}) => {
    return (
        <div className="HomeFooter">
            <h1>HomeFooter</h1>
        </div>
    );
};

const Home = ({data}) => {
    return (
        <div className="Home">
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </div>
    );
};

class HomePage extends Component {
  render() {
    return (
        <Home />
    );
  }
};

export default HomePage;