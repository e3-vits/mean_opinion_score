function doGet(e) {

	var params = e.parameter;

	var SpreadSheet = SpreadsheetApp.openById("1TKbHfWciuirZUndXo16eBT9K9OXQUEyNOrCH_6mBWXE");
	var Sheet = SpreadSheet.getSheets()[0];
	var LastRow = Sheet.getLastRow();

	Sheet.getRange(LastRow+1, 1).setValue(params.name);
	Sheet.getRange(LastRow+1, 2).setValue(params.mail);
	Sheet.getRange(LastRow+1, 3).setValue(params.formid);

	for (var i = 1; i <= 3; i++) {
		Sheet.getRange(LastRow+1, 3+i).setValue(params["q" + i.toString()]);
	}

	return ContentService.createTextOutput(params.thank);
}
