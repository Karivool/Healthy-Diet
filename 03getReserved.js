servers = ['cranberry.intranet', 'dev', 'release'];
names = ['Cranberry', 'Dev', 'Release'];
pics = ['cranberry', 'dev', 'release'];

function choices(servers, names, pics) {
    let serverString = "";
    for (var choice = 0; choice < servers.length; choice++) {
      serverString += `<div class="server-choice"><img src="images/${pics[choice]}.jpg"/><div class="sc-text">${names[choice]}</div></div>`;
    };
    document.write(serverString);
};

choices(servers, names, pics);
