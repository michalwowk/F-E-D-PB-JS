// Zadanie 4
/*

var cells = document.querySelectorAll('td');
var cellsL = cells.length;

var show_btn = document.getElementById('show-btn');

show_btn.addEventListener('click',function(){
    var random = Math.floor(Math.random() * cellsL);
    document.getElementById('result').textContent = cells[random].textContent;
}); // end of event

*/

// Zadanie 5

var rows = document.querySelectorAll('tr');
var cells = document.querySelectorAll('td');
var table = document.querySelector('table');

table.addEventListener('mouseover', function (event) {

    event.target.style.backgroundColor = 'red';
    event.target.parentNode.style.backgroundColor = 'blue';

})