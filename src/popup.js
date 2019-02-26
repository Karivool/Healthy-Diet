// const DIBSURL = chrome.runtime.sendMessage("getDibsPage", function(response){
//   let serverString = "";
//   let dibsURL = new URL (response.url);
//
//   let protocol = dibsURL.protocol + "//";
//   let pathname = dibsURL.pathname;
//
//   console.log(dibsURL);
//   return dibsURL;
// });

let currentURL = function(tab){
  let newUrlLand = new URL (tab.url);
  console.log(newUrlLand);
  return newUrlLand;
};
console.log("currentURL is:");
console.log(currentURL());
