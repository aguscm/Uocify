import Vue from "vue";

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

Vue.filter("dotNumber", function (number) {

    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
});

