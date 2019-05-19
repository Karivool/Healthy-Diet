import React, { Component } from 'react';
import ServerList from './ServerList';

class Main extends Component {

  render() {

    const SERVERCONST = require('./constants.js');

    let mainServers = SERVERCONST['mainServers'];
    let mainNames = SERVERCONST['mainNames'];
    let mainPics = SERVERCONST['mainPics'];
    let fruitServers = SERVERCONST['fruitServers'];
    let fruitNames = SERVERCONST['fruitNames'];
    let fruitPics = SERVERCONST['fruitPics'];
    let veggieServers = SERVERCONST['veggieServers'];
    let veggieNames = SERVERCONST['veggieNames'];
    let veggiePics = SERVERCONST['veggiePics'];
    let reservedServers = SERVERCONST['reservedServers'];
    let reservedNames = SERVERCONST['reservedNames'];
    let reservedPics = SERVERCONST['reservedPics'];

    let urlParts = this.props.urlParts;

    return(
      <div class="server-list">
        <div class="color-bg-1">
          <div class="selection-divider">Main</div>
          <ServerList urlParts={urlParts} servers={mainServers} names={mainNames} pics={mainPics}/>
        </div>
        <div class="color-bg-2">
          <div class="selection-divider">Fruit</div>
          <ServerList urlParts={urlParts} servers={fruitServers} names={fruitNames} pics={fruitPics}/>
        </div>
        <div class="color-bg-1">
          <div class="selection-divider">Veggie</div>
          <ServerList urlParts={urlParts} servers={veggieServers} names={veggieNames} pics={veggiePics}/>
        </div>
        <div class="color-bg-2">
          <div class="selection-divider">Reserved</div>
          <ServerList urlParts={urlParts} servers={reservedServers} names={reservedNames} pics={reservedPics}/>
        </div>
      </div>
    )
  }
}

export default Main;
