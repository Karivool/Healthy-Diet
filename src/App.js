/*global chrome*/
import React, { Component } from 'react';
import Main from './Main.js';
import { getUrl } from "./Utils";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  componentDidMount() {
    getUrl((tab) => {
      let getUrl = tab;
      if (typeof(getUrl) === "string") {
        this.setState({
          url: getUrl
        });
      }
      else
      {
        this.setState({
          url: "INVALID URL"
        });
      }
    });
  }

  render() {
    let currentUrl = this.state.url;
    let urlParts;

    if (currentUrl !== "") {
      urlParts = new URL(currentUrl);
    }

    return (
      <div className="App">
        <div class="title">
          <img src="images/title.png" alt=""/><div class="title-text">Healthy Diet - Server Switcher</div>
        </div>
        <div class="current-url">{currentUrl}</div>
        <Main urlParts={urlParts}/>
      </div>
    );
  }
}

export default App;
