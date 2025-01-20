const $days = document.getElementById("days"),
    $hours = document.getElementById("hours"),
    $minutes = document.getElementById("minutes"),
    $seconds = document.getElementById("seconds");

const countdownDate = new Date('2 5, 2025 00:00:00').getTime();

let interval = setInterval(function() {
    const now = new Date().getTime();

    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    if (distance < 0) {
        clearInterval(interval);
        window.location.href = "reward.html";
    }

}, 1000);