$(document).ready(function () {
    var finalNumber = 99; // Set your desired final number
    var animationDuration = 10000; // Animation duration in milliseconds

    var currentNumber = 0;
    var increment = finalNumber / (animationDuration / 25); // Calculate increment per millisecond

    var counter = $('.counter');

    var interval = setInterval(function () {
        currentNumber += increment;
        counter.text(Math.ceil(currentNumber)); // Display the rounded number

        if (currentNumber >= finalNumber) {
            clearInterval(interval); // Stop the interval when the final number is reached
            $('.preloader').fadeOut(); // Hide the preloader
        }
    }, 1); // Update every millisecond for smooth animation

    $('.preloader').fadeIn(); // Show the preloader initially
});
