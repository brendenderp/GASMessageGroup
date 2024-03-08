// Google Apps Script backend for a simple web app interacting with a Google Sheets spreadsheet.

// Define spreadsheet URL constant
var SPREADSHEET_URL = 'Give this a full URL ex https://docs.google.com/spreadsheets/d/12mrp4m3MZ0gt2QNq08yHGNAtQ2ty1goCnPI/edit#gid=0';

// Initialize web app
function doGet() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
      .setTitle('My Web App');
  return htmlOutput;
}

// Retrieve loading content
function getLoadingContent() {
  return HtmlService.createHtmlOutputFromFile('loading').getContent();
}

// Retrieve login content
function getLoginContent() {
  return HtmlService.createHtmlOutputFromFile('login').getContent();
}

// Retrieve main content
function getMainContent() {
  return HtmlService.createHtmlOutputFromFile('main').getContent();
}

// Retrieve mobile style
function MobileStyle() {
  return HtmlService.createHtmlOutputFromFile('mobilestyle').getContent();
}

// Retrieve desktop style
function DesktopStyle() {
  return HtmlService.createHtmlOutputFromFile('style').getContent();
}

// Poll for new messages based on Unix timestamp
function pollForAllMessages(latestUnixTime) {
  var sheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL).getActiveSheet();
  var filteredMessages = sheet.getRange(1, 1, sheet.getLastRow(), 3)
                               .getValues()
                               .filter(function (message) {
                                 return message[0] > latestUnixTime;
                               });
  return filteredMessages;
}

// Send message to server (Google Sheets)
function sendMessageToServer(message, user) {
  var sheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL).getActiveSheet();
  var unixTimestamp = Math.floor(new Date().getTime() / 1000);
  var nextRow = sheet.getLastRow() + 1;
  sheet.getRange(nextRow, 1).setValue(unixTimestamp); // Set Unix time
  sheet.getRange(nextRow, 2).setValue(message);
  sheet.getRange(nextRow, 3).setValue(user);
}
