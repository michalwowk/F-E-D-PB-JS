/// Grabs 

var colField = document.getElementById('col-field');
var rowField = document.getElementById('row-field');
var valField = document.getElementById('val-field');
var addBtn = document.getElementById('add-btn');
var rows = document.querySelectorAll('tr');

var colF_v = parseInt(colField.value, 10);


addBtn.addEventListener('click', function () {
    // Parsing the values 
    var colF_v = parseInt(colField.value, 10);
    var rowF_v = parseInt(rowField.value, 10);
    var valF_v = valField.value;
    

    rows[rowF_v].cells[colF_v].textContent = valF_v;

}); // End of addBtn click event