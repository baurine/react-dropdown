import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDrow1 from './DropDown1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <DropDrow1/>
          <p>some content here</p>
          <p>some content here</p>
          <p>some content here</p>
          <p>some content here</p>
          <p>some content here</p>
        </div>
      </div>
    );
  }
}

export default App;