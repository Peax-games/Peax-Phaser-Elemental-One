import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElementalOne from './Game/ElementalOne';

class App extends Component {
  render() {
    ElementalOne();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
