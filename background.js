// Fires when Chrome starts (browser startup)
chrome.runtime.onStartup.addListener(() => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("index.html")
    });
  });
  
  // Fires when extension is installed or updated
  chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("index.html")
    });
  });
  