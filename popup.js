// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'
  });;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
  document.getElementById('pagetitle').innerHTML = message;
  document.getElementById('checkPage').innerHTML = "O que eu quiser";
});

// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {
//     alert(location.hostname);
//   }, false);
// }, false);