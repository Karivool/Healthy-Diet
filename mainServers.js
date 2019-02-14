function getConst() {
    const url = chrome.runtime.getURL('constants.js');
    return fetch(url);
};

function mainChoices() {
    const mainServers = Servers.mainServers;
    const mainNames = Servers.mainNames;
    const mainPics = Servers.mainPics;
    let serverString = "";
    for (var choice = 0; choice < mainServers.length; choice++) {
      serverString += `<div class="server-choice"><img src="images/${mainPics[choice]}.jpg"/><div class="sc-text">${mainNames[choice]}</div></div>`;
    };
    return serverString;
};
