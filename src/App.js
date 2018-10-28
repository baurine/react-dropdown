import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown1 from './DropDown1';
import DropDown2 from './DropDown2';
import DropDown3 from './DropDown3';
import DropDown4 from './DropDown4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <a href="https://github.com/baurine/react-dropdown">Go to GitHub</a>
          <DropDown1/>
          <p>Dropdown menu will disappear when clicking anywhere, even inside the menu,</p>
          <p>implemented by "document.addEventListener('click', this.handleGlobalClick)"</p>
          <DropDown2/>
          <p>Dropdown menu will disappear only when clicking outside menu,</p>
          <p>use DOMNode.contains() method to judge whether the click target inside or outside menu area.</p>
          <DropDown3/>
          <p>Dropdown menu will disappear only when clicking outside menu,</p>
          <p>use "window.addEventListener('click', this.handleGlobalClick)" and "event.stopPropagation()",</p>
          <p>Notice! "event.stopPropagation()" just can stop event propagate to window, can't stop propagate to document,</p>
          <p>that's why we use "window.addEventListener()" here, not "document.addEventListener()".</p>
          <DropDown4/>
        </div>
      </div>
    );
  }
}

export default App;
