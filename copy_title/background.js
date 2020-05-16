chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.executeScript(undefined, {file: 'copyTitle.js'});
});