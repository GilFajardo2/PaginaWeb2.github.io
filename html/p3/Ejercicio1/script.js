document.addEventListener("DOMContentLoaded", function() {
  var numRows = 4; 
  var numCols = 4; 
  var table = document.getElementById("random-table");

  for (var i = 0; i < numRows; i++) {
    var row = table.insertRow();
    for (var j = 0; j < numCols; j++) {
      var cell = row.insertCell();
      cell.textContent = Math.floor(Math.random() * 100) + 1; 
    }
  }
});
