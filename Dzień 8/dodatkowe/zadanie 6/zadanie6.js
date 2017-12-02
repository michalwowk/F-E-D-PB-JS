var list = document.getElementsByTagName('li');

for (var i = 0; i < list.length; i++) {
    if (i % 2 == 0 && i !== 0 && i !== list.length - 1) {
        list[i].addEventListener('click', function () {
            clearing();
            this.style.color = 'green';
            this.previousElementSibling.style.color = 'blue';
            this.nextElementSibling.style.color = 'red';
            this.style.backgroundColor = '#555';
        }) // End of event
    } // End of condition
    else if (i == 0) {
        list[i].addEventListener('click', function () {
            clearing();
            this.style.color = 'green';
            this.nextElementSibling.style.color = 'red';
            this.style.backgroundColor = '#555';
        }) // end of event
    } // end of condition
    else if (i == list.length - 1) {
        list[i].addEventListener('click', function () {
            clearing();
            this.style.color = 'green';
            this.previousElementSibling.style.color = 'blue';
            this.style.backgroundColor = 'grey';
        }) // end of event
    } // end of condition
    else {
        list[i].addEventListener('click', function () {
            clearing();
            this.style.color = 'green';
            this.previousElementSibling.style.color = 'blue';
            this.nextElementSibling.style.color = 'red';
            this.style.backgroundColor = 'grey';
        }) // end of evet
    } // end condition
} //End of loop

function clearing() {
    for (var j = 0; j < list.length; j++) {
        list[j].style.color = null;
        list[j].style.backgroundColor = null;
    }
}