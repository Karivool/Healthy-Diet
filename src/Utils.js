/*global chrome*/
export function getUrl(tabUrl) {chrome.tabs.query(
  {
    currentWindow: true,
    active: true
  },
  function(tabs){
    tabUrl(tabs[0].url);
  });
}
