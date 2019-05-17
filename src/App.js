/*global chrome*/
import React, { Component } from 'react';
import Main from './Main.js';
import UrlGetter from "./UrlGetter";
import { getCurrentTab } from "./Utils";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    getCurrentTab((tab) => {
      chrome.runtime.sendMessage({type: 'popupInit', tabId: tab.id}, (tabs) => {
      if (tabs) {
        console.log("response found");
        console.log(tabs);
        this.setState({
          url: Object.assign(this.state.url, tabs)
        });
      } else {
        console.log("else");
        console.log(tabs);
      }
      });
    });
  }

  componentDidUpdate() {
  }

  render() {
    let currentUrl = this.state.url;
    return (
      <div className="App">
        <div class="title">
          <img src="images/title.png" alt=""/><div class="title-text">Healthy Diet - Server Switcher</div>
        </div>
        <UrlGetter traffic={this.state.url}/>
        Current URL: {currentUrl}
        <Main/>
      </div>
    );
  }
}

export default App;
