chrome.tabs.query(
  {
    'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var domain = url.hostname;
    console.log(domain);
  });
