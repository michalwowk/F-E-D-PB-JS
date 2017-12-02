/*Funkcja na podstawie tablicy liczb tworzy pionową tabelę - w pierwszej kolumnie wyświetlane są wartości z tablicy, natomiast w drugiej sumy wartości kolejnych par elementów (zerowego z pierwszym, drugiego z trzecim, czwartego z piątym i tak dalej) - przy czym każda z komórek drugiej kolumny rozciąga się na wysokość dwóch wierszy.
-- To samo, ale dla poziomej tabeli - pierwszy wiersz to wartości, natomiast drugi - rozciągnięte komórki z sumami par.*/

var wrapper = document.getElementById('wrapper');
var table = document.createElement(table);
var tbody = document.createElement(tbody);
var tr = document.createElement(tr);
var td = document.createElement(td);

var arr=[0,1,2,3,4,5,6,7,8,9]


wrapper.appendChild(table);
table.appendChild(tbody);

console.log(arr);



