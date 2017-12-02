/// Grabs 
var btn = document.getElementById('calc-btn');
var resultF = document.getElementById('result');

btn.addEventListener('click', function () {
    var daysF = parseInt(document.getElementById('day-field').value, 10);
    var monthF = parseInt(document.getElementById('month-field').value, 10);
    var yearF = parseInt(document.getElementById('year-field').value, 10);

    var monthF_v = monthF - 1;

    var myDate = new Date(yearF, monthF_v, daysF);
    var dayOfWeek = myDate.getDay();
    console.log(dayOfWeek)

    switch (dayOfWeek) {
        case 1:
            resultF.textContent += "w poniedziałek"
            break;
        case 2:
            resultF.textContent += "we wtorek"
            break;
        case 3:
            resultF.textContent += "w środa"
            break;
        case 4:
            resultF.textContent += "we czwartek"
            break;
        case 5:
            resultF.textContent += "w piąteczek piatunio"
            break;
        case 6:
            resultF.textContent += "w sobotę"
            break;
        case 0:
            resultF.textContent += "w niedziele"
            break;
        default:
            resultF.textContent += "cos jest nie tak"
            break;

    }
}); // koniec zdarzenia btn