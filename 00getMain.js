let servers = ['', 'qa', 'stage', 'mario', 'luigi', 'bowser'];
let names = ['PROD', 'QA', 'Stage', 'Mario', 'Luigi', 'Bowser'];
let pics = ['prod', 'qa', 'stage', 'mario', 'luigi', 'bowser'];

function choices(servers, names, pics) {
    chrome.runtime.sendMessage({getDibsPage: 0}, function(response){
      let serverString = "";
      let dibsURL = new URL (response.url);

      let protocol = dibsURL.protocol + "//";
      let pathname = dibsURL.pathname;

      console.log(dibsURL);
    });
};

// for (var choice = 0; choice < servers.length; choice++) {
//   serverString += `<div class="server-choice"><img src="images/${pics[choice]}.jpg"/><div class="sc-text">${names[choice]}</div></div>`;
// };
// document.write(serverString);

choices(servers, names, pics);
