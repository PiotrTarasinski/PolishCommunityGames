// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2018 17:30:00").getTime();

//counter_days

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //  Add 0 at the start if number is lower than 10
    if(days<10)
        days="0"+days;
    if(hours<10)
        hours="0"+hours;
    if(minutes<10)
        minutes="0"+minutes;
    
    // Display the result in the element
    document.getElementById("counter_days").innerHTML = days;
    document.getElementById("counter_hours").innerHTML = hours;
    document.getElementById("counter_minutes").innerHTML = minutes;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter_days").innerHTML = "00";
        document.getElementById("counter_hours").innerHTML = "00";
        document.getElementById("counter_minutes").innerHTML = "00";
    }
}, 1000);