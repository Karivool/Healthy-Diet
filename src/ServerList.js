import React, { Component } from 'react';

class ServerList extends Component {

  makeLink(urlParts, serverName) {
    if (urlParts === undefined) {
      return "https://www.1stdibs.com/";
    } else {
      let newHost = "";
      let hostParts = urlParts.host.split(".");

      switch (hostParts.length) {
        case 3:
          // case 3 e.g.
          // www.1stdibs.com || qa.1stdibs.com
          if (hostParts[0] === "adminv2") {
            newHost = `adminv2.${serverName}.1stdibs.com`;
          } else if (hostParts[1] === "1stdibs") {
            newHost = `${serverName}.1stdibs.com`;
          } else {
            newHost = urlParts.host;
          }
          break
        case 4:
          // case 4 e.g.
          // guava.intranet.1stdibs.com || adminv2.stage.1stdibs.com
          if (hostParts[0] === "adminv2") {
            newHost = `adminv2.${serverName}.1stdibs.com`;
          } else if (hostParts[1] === "intranet") {
            newHost = `${serverName}.1stdibs.com`;
          } else {
            newHost = urlParts.host;
          }
          break
        case 5:
          // Always adminv2 with intranet
          // e.g. adminv2.guava.intranet.1stdibs.com
          if (hostParts[2] === "intranet") {
            let checkProd = (serverName === "www") ? "" : `${serverName}.` ;
            newHost = `adminv2.${checkProd}1stdibs.com`;
          } else {
            newHost = urlParts.host;
          };
          break
        default:
          newHost = urlParts.host;
      }
      return `${urlParts.protocol}//${newHost}${urlParts.pathname}${urlParts.search}`;
    }
  }

  render() {
    let servers = this.props.servers;
    let names = this.props.names;
    let pics = this.props.pics;
    let urlParts = this.props.urlParts;
    let linkMaker = this.makeLink;

    return(
      <div class="manual-selection">
        { servers.map(function(server, idx) {
            return (
              <div class="server-choice" key={idx} idx={idx}>
                {
                  <a
                    href={linkMaker(urlParts, servers[idx])}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={`/images/${pics[idx]}.jpg`}
                      alt={names[idx]}
                    />
                  </a>
                  }
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
