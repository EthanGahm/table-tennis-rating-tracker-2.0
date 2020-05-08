// Google App Scripts' built in Logger.log() function seems not to be working for some reason. This is a replacement.
// Takes a string parameter displays it in the first cell of the "Debugging Log" sheet.
function log(text){
  var logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[2]
  logSheet.getRange("A1").setValue(logSheet.getRange("A1").getValue() + "\n" + text)
}

// Clears the log sheet.
// Called with the press of a "clear log" button.
function clearLog(){
  var logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[2]
  logSheet.getRange("A1").setValue(null)
}