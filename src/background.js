chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '1stdibs.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
    currentURL(tabs[0]);
});

// chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse) {
//       if (request.action == "getDibsPage"){
//         console.log(request);
//         chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs){
//           console.log(tabs[0].url);
//           sendResponse({url: tabs[0].url});
//         });
//         return true;
//       }
//    }
// );
