import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDrow1 from './DropDown1';
import DropDrow2 from './DropDown2';
import DropDrow3 from './DropDown3';

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
          <p>Dropdown menu will disappear when clicking anywhere, even inside the menu,</p>
          <p>implemented by "document.addEventListener('click', this.handleGlobalClick)"</p>
          <DropDrow2/>
          <p>Dropdown menu will disappear only when clicking outside menu,</p>
          <p>use DOMNode.contains() method to judge whether the click target inside or outside menu area.</p>
          <DropDrow3/>
          <p>Dropdown menu will disappear only when clicking outside menu,</p>
          <p>use "window.addEventListener('click', this.handleGlobalClick)" and "event.stopPropagation()",</p>
          <p>Notice! "event.stopPropagation()" just can stop event propagate to window, can't stop propagate to document,</p>
          <p>that's why we use "window.addEventListener()" here, not "document.addEventListener()".</p>
        </div>
      </div>
    );
  }
}

export default App;
