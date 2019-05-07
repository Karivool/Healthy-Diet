import React, { Component } from 'react';

class ServerList extends Component {

  render() {
    let servers = this.props.servers;
    let names = this.props.names;
    let pics = this.props.pics;

    return(
      <div class="manual-selection">
        { servers.map(function(server, idx) {
            return (
              <div class="server-choice" key={idx} idx={idx}>
                {<img src={`/images/${pics[idx]}.jpg`}/>}
                <div class="sc-text">{names[idx]}</div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default ServerList;
