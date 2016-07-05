var t;
var flag = 0;

function input() {

    var dy = document.getElementById("day").value;
    var hr = document.getElementById("hr").value;
    var mn = document.getElementById("min").value;
    var sc = document.getElementById("sec").value;

    c = ((dy * 86400) + (hr * 3600) + (mn * 60) + (sc * 1));
    start1();
}

function timing() {

    if (c >= 0 && flag == 1) {
        var sec1 = Math.floor(c % 60);
        var min1 = Math.floor((c / 60)) % 60;
        var hr1 = Math.floor((c / 3600) % 24);
        var day1 = Math.floor(c / (3600 * 24));

        document.getElementById("days").innerHTML = day1;
        document.getElementById("hours").innerHTML = hr1;
        document.getElementById("mins").innerHTML = min1;
        document.getElementById("secs").innerHTML = sec1;

        c--;
    }
}

function start1() {
    if(flag!=1)            //To prevent setting of more intervals for executing timing() when 'start' button is pressed twice
    {
    flag = 1;
    t = setInterval(timing, 1000);
    }
}

function stop1() {
    flag = 0;
    clearInterval(t);
}

function rese() {
    flag = 0;              
    clearInterval(t);
    document.getElementById("days").innerHTML = 00;
    document.getElementById("hours").innerHTML = 00;
    document.getElementById("mins").innerHTML = 00;
    document.getElementById("secs").innerHTML = 00;

    intime();

}