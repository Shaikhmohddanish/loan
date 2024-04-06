var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function updateTimer() {
    var minutes = 10;
    var seconds = 0;
    var timerElement = document.getElementById('timer');
    
    var timerInterval = setInterval(function() {
      // Format minutes and seconds
      var minutesStr = String(minutes).padStart(2, '0');
      var secondsStr = String(seconds).padStart(2, '0');
      
      // Update timer element
      timerElement.textContent = minutesStr + ':' + secondsStr;
      
      // Decrease time
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes === 0) {
          clearInterval(timerInterval); // Stop the timer when time runs out
          timerElement.textContent = "Time's up!";
          return;
        }
        minutes--;
        seconds = 59;
      }
    }, 1000); // Update every second
  }

  // Call the function to start the timer
updateTimer();