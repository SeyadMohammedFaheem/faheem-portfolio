

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
            $('.preloader').animate({ bottom: '1080px' })(SlowMo); // Hide the preloader
        }
    }, 0.2); // Update every millisecond for smooth animation

    $('.preloader').fadeIn(); // Show the preloader initially
});
document.addEventListener('mousemove', function (e) {
    var cursorVideo = document.getElementById('cursorVideo');
    var posX = e.clientX;
    var posY = window.pageYOffset
    if (posY > 300) return;
    cursorVideo.style.transition = '0.1s easeInOutElastic'; // Adjust the duration and easing as needed
    cursorVideo.style.left = posX + 'px';


});

document.addEventListener('scroll', (e) => {
    console.log(e, 'e');
    var cursorVideo = document.getElementById('cursorVideo');
    var targetStop = document.getElementById('target-stop');
    var targetStop = document.getElementById('video-container');
    var posY = (window.pageYOffset * 2) + 200;
    cursorVideo.style.transition = '0.1s easeInOutElastic'; // Adjust the duration and easing as needed
    if (posY < 750) {

        cursorVideo.style.top = `${posY}px`;
        if (posY < 1020) {
            cursorVideo.style.width = `${posY}px`;




        }
    } else {
        cursorVideo.style.left = '50%';
        cursorVideo.style.transform = 'translate(-50%, -50%)';
        cursorVideo.style.width = '100%'; // Make the video full width

        cursorVideo.style.transform = 'translate(-50%)'; // Center the video vertically


    }
})
document.addEventListener('mousemove', function (e) {
    var cursorimg = document.getElementById('cursorimg');
    var posX = e.clientX;
    var posY = e.clientX;
    if (posY > 10);


    cursorimg.style.transition = '0.1s easeInOutElastic'; // Adjust the duration and easing as needed
    $('img').css('left', e.pageX);
    $('img').css('top', e.pageY);




});


