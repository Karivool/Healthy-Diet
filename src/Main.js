import React, { Component } from 'react';
import ServerList from './ServerList';

class Main extends Component {

  render() {

    const SERVERCONST = require('./constants.js');

    let mainServers = SERVERCONST['mainServers'];
    let mainNames = SERVERCONST['mainNames'];
    let mainPics = SERVERCONST['mainPics'];

    let urlParts = this.props.urlParts;

    return(
      <div class="server-list">
        <div class="color-bg-1">
          <div class="selection-divider">Main</div>
          <ServerList urlParts={urlParts} servers={mainServers} names={mainNames} pics={mainPics}/>
        </div>
        <div class="color-bg-2">
          <div class="selection-divider">Fruit Server</div>
          <ServerList urlParts={urlParts} servers={} names={} pics={}/>
        </div>
        <div class="color-bg-1">
          <div class="selection-divider">Trimmed Server</div>
          <ServerList urlParts={urlParts} servers={} names={} pics={}/>
        </div>
      </div>
    )
  }
}

export default Main;
