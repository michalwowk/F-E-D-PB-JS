var arrIndex = 0;
var arr = ['1.png', '2.png', '3.png', '4.png', '5.png']

var prev_btn = document.querySelector('#prev-btn')
var next_btn = document.querySelector('#next-btn')
var textField = document.querySelector('#field')
var imgField = document.getElementById('slider');

imgField.src = arr[0];

//textField.value = arr[0];

// // Podpunt 1

// next_btn.addEventListener('click', function () {

//     prev_btn.disabled = false;
//     arrIndex++;
//     textField.value = arr[arrIndex];

//     if (arrIndex == arr.length - 1) {
//         next_btn.disabled = true;
//     }
// }); /// Koniec zdarzenia onclick dla next-btn

// prev_btn.addEventListener('click', function () {

//     next_btn.disabled = false;
//     arrIndex--;
//     textField.value = arr[arrIndex];


//     if (arrIndex == 0) {
//         prev_btn.disabled = true;
//     }
//    
// }); /// Koniec zdarzenia onclick dla prev-btn

// // Podpunkt 2

// textField.addEventListener('change', function(){
//     arr[arrIndex]=textField.value;
// })

next_btn.addEventListener('click', function () {

    prev_btn.disabled = false;
    arrIndex++;
    imgField.src = arr[arrIndex];

    if (arrIndex == arr.length - 1) {
        next_btn.disabled = true;
    }
}); /// Koniec zdarzenia onclick dla next-btn

prev_btn.addEventListener('click', function () {

    next_btn.disabled = false;
    arrIndex--;
    imgField.src = arr[arrIndex];


    if (arrIndex == 0) {
        prev_btn.disabled = true;
    }

}); /// Koniec zdarzenia onclick dla prev-btn