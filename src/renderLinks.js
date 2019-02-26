function choices(servers, names, pics) {
    let serverString = "";
    for (var choice = 0; choice < servers.length; choice++) {
      serverString += `<div class="server-choice"><img src="images/${pics[choice]}.jpg"/><div class="sc-text">${names[choice]}</div></div>`;
    };
    document.write(serverString);
};
