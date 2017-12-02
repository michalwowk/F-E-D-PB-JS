var run_btn = document.querySelector('#run-btn');
var clr_btn = document.querySelector('#clr-btn');
var msg = document.querySelector('#msg');
arr = [];

run_btn.addEventListener('click', function () {
    var f1 = document.getElementById('field_1');
    var f1_v = f1.value;
    var sel = document.querySelector(f1_v);
    if (sel === null) {
        alert("Taki selektor nie istnieje proszę podaj inny");
    }
    else {
        sel.style.color = 'red';
        arr.push(f1_v);
    }    
}); // koniec zdarzenia click przycisku run

clr_btn.addEventListener('click', function() {
    for (var i=0; i<arr.length;i++){
        var sele = document.querySelector(arr[i]);
        sele.style.color = null;
    }
});