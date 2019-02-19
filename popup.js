chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if (request){
        console.log(request);
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs){
          console.log(tabs[0].url);
          sendResponse({url: tabs[0].url});
        });
        return true;
      }
   }
);
