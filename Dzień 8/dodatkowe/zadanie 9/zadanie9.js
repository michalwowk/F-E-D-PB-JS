var table = document.querySelector('table');

table.addEventListener('click', function (ev) {
    cell_str = ev.target.textContent;
    cell_v = parseInt(cell_str, 10); //
    cellWidth = cell_v;

    newCellWidth = cell_v / 2;
    newCellValue = cell_v / 2;

    var arrOfCells = Array.from(ev.target.parentElement.children);
    console.log(arrOfCells); // Making an array from collection of cells
    var index = arrOfCells.indexOf(ev.target); // Getting the index of clicked element
    console.log(index);


}); // End of table click event  