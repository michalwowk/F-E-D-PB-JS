var wrapper = document.querySelector('#data');
var yearElems = document.querySelectorAll('.year');
var arrDates = [];


for (var i = 0; i < yearElems.length; i++) {
    var yearTxt = yearElems[i].textContent;

    yearTxt = yearTxt.slice(-5, -1).trim();
    yearTxt = parseInt(yearTxt, 10);

    arrDates.push(yearTxt)
}

var currentYear = new Date().getFullYear();
arrDates.push(currentYear)



arrDates.sort(function (a, b) {
    return b - a;
});

var list = "<ol>";
for (var j = 0; j < arrDates.length; j++) {
    list += "<li>" + arrDates[j] + "</li>";
}
list += "</ol>";

document.querySelector('#data').innerHTML = list;
//////////////////////////////////////////////////////////////////////

// Zadanie 1.1

var h2 = document.querySelector('h2');
h2.style.textTransform = 'uppercase';

// Zadanie 1.2

var selPara = document.querySelectorAll('.section>p');
for (var i = 0; i < selPara.length; i++) {
    selPara[i].style.backgroundColor = 'grey';
    selPara[i].style.color = 'white';
}

// Zadanie 1.3

var allPara = document.querySelectorAll('p');
for (var i = 0; i < allPara.length; i++) {
    if (allPara[i].parentElement.nodeName !== 'DIV') {
        var b = document.createElement('b')
        var textLength = allPara[i].textContent.length;
        var text = document.createTextNode(textLength + "");

        //       console.log(textLength);
        b.appendChild(text);
        allPara[i].appendChild(b);
    }
}

// Zadanie 2 // dokonczyc dzialanie na guzik

var hidEle = document.querySelectorAll('.hidden');
for (var i = 0; i < hidEle.length; i++) {
    var hidCon = hidEle[i].textContent;
    var arr = hidCon.split('%20'); // rodzielic po %20
    var arr2 = arr.join(' '); // polaczyc tablice spacjami
    var decoded = arr2.toString(); // zamienic na string
    hidEle[i].textContent = decoded; // podmienic stara zawartosc
}
// Zadanie 3

    // Zadanie 3.1 

    var arr = [];
    var arr2 =[];
    
    var yearElems = document.querySelectorAll('.year');
    for (var i = 0; i < yearElems.length; i++) {
        arr[i] = yearElems[i].textContent; // mam tablice dat
        var regEx = /\d+/g; // NOWOŚĆ - fajne
        var regExResult = arr[i].match(regEx);
        arr2.push(regExResult)
    }
    
    // Zadanie 3.2
    
    var date = new Date();
    var year = date.getFullYear();
    arr2.push(year);
    console.log(arr2)
    
    arr2.sort(function(a,b){
        return a-b; // sortuje rosnąco b-a sortuje malejaco    
    });
    
    // Zadanie 3.3
    
    var ordLi = document.createElement('ol');
    ordLi.id = 'lista2'
    document.body.appendChild(ordLi);
    
    for (var i=0;i<arr2.length;i++){
        var listItem = document.createElement('li');
        var tekst = arr2[i];
        var textNode = document.createTextNode(tekst);
        listItem.appendChild(textNode);
        ordLi.appendChild(listItem);
    }
    
    // Zadnie 3.4 
    
    var ols = document.querySelectorAll('ol');
    var firstLI = ols[1].querySelector('li');
    console.log(firstLI)
    firstLI.style.backgroundColor = 'red';

