// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'
  });;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
  document.getElementById('pagetitle').innerHTML = message;
  downloadURI(message, message);
  saveChanges(message);
  document.getElementById('checkPage').innerHTML = "Bt_1";
});

function saveChanges(textarea) {
  // Get a value saved in a form.
  var theValue = textarea;
  // Check that there's some code there.
  if (!theValue) {
    message('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.local.set({'value': theValue}, function() {
    // Notify that we saved.
    console.log("Saved");
    // message('Settings saved'); RD\'  \X '
  });
}

function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}