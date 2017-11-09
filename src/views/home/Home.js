import React, { Component } from 'react';
import logo from 'images/logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Home page</h1>
        
      </div>
    );
  }
}

export default Home;
