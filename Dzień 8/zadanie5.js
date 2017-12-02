var container_1 = document.getElementById('container1');
var container_2 = document.getElementById('container2');
var container_3 = document.getElementById('container3');
var container_4 = document.getElementById('container4');

var show_con1_btn = document.getElementById('show-con1');
var show_con2_btn = document.getElementById('show-con2');
var show_con3_btn = document.getElementById('show-con3');
var show_con4_btn = document.getElementById('show-con4');

//show / hide button value

show_con1_btn.addEventListener('click', function () {
    if (this.value == 'show') {
        this.value = 'hide';
        container_1.style.visibility = 'visible';
    }

    else if (this.value = 'hide') {
        this.value = 'show';
        container_1.style.visibility = 'hidden';
    }

}); // end of click event for showHide button

show_con2_btn.addEventListener('click', function () {
    if (this.value == 'show') {
        this.value = 'hide';
        container_2.style.visibility = 'visible';
    }

    else if (this.value = 'hide') {
        this.value = 'show';
        container_2.style.visibility = 'hidden';
    }

}); // end of click event for showHide button

show_con3_btn.addEventListener('click', function () {
    if (this.value == 'show') {
        this.value = 'hide';
        container_3.style.visibility = 'visible';
    }

    else if (this.value = 'hide') {
        this.value = 'show';
        container_3.style.visibility = 'hidden';
    }

}); // end of click event for showHide button

show_con4_btn.addEventListener('click', function () {
    if (this.value == 'show') {
        this.value = 'hide';
        container_4.style.visibility = 'visible';
    }

    else if (this.value = 'hide') {
        this.value = 'show';
        container_4.style.visibility = 'hidden';
    }

}); // end of click event for showHide button
