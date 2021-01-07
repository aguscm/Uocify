import Vue from "vue";

//Convierte los segundos al formato MM:SS
Vue.filter("secondsToMinutes", function (time) {
    var minutes = Math.floor(time / 60).toString();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var seconds = (time - minutes * 60).toString();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
});

//Convierte una cifra en un String que añade un punto cada tres cifras en formato X.XXX.XXX
Vue.filter("dotNumber", function (number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
});

