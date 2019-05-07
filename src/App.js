import React, { Component } from 'react';
import Main from './Main.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="title">
          <img src="images/title.png" alt=""/><div class="title-text">Healthy Diet - Server Switcher</div>
        </div>
        <Main/>
      </div>
    );
  }
}

export default App;
