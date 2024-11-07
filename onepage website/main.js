



function darkmood() {
    const themestyle = document.getElementById('themestyle')
    const toggle = document.getElementById('toggle')
    const topimage = document.getElementById('topimage')
    const topdark = document.getElementById('topdark')
    const bottomdark = document.getElementById('bottomdark')


    // Darkmode()
    if (themestyle.getAttribute('href') === '/index.css/light.css') {
        themestyle.setAttribute('href', '/index.css/dark.css');
        toggle.className = 'fa-solid fa-toggle-off fa-toggle-on';
        topimage.src = '/asset/shape-top-black-80.png';
        topdark.src = '/asset/shape-top-dark-grey-80.png';
        bottomdark.src = '/asset/shape-top-dark-grey-80.png';
    }

    else {
        themestyle.setAttribute('href', '/index.css/light.css');
        toggle.className = 'fa-solid fa-toggle-off fa-toggle-off';
        topimage.src = '/asset/shape-top-white-80.png';
        topdark.src = '/asset/shape-top-grey-80.png';
        bottomdark.src = '/asset/shape-top-grey-80.png';
    }



    
}

 // Countdown timer JavaScript
 function startCountdown() {
    // Set the target date and time
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    // Update the countdown every 1 second
    setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the respective HTML elements
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      // If the countdown is over, display a message
      if (distance <= 0) {
        clearInterval();
        document.querySelector(".count").innerHTML = "Countdown Ended";
      }
    }, 1000);
  }

  document.addEventListener("DOMContentLoaded", startCountdown);


  function menubar() {
    const barIcon = document.getElementById("bar");
    const timesIcon = document.getElementById("fa-times");

    // Toggle visibility
    if (barIcon.style.display === "none") {
        barIcon.style.display = "block";
        timesIcon.style.display = "none";
    } else {
        barIcon.style.display = "none";
        timesIcon.style.display = "block";
    }
}




window.addEventListener('scroll', function() {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {  // Adjust the scroll position as needed
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

    //  function menubar (){
    //     document.getElementById('bar').className="fa-solid fa-times"
    //  }
     
    //  function timesbar (){
    //     document.getElementById("fa-times").className="fa-solid fa-bars"
    //  }
    // // Darkmode()
    // function darkmood () {
    //                    document.getElementById('themestyle').setAttribute('href', '/index.css/dark.css'); 

    //                    document.getElementById('toggle').className='fa-solid fa-toggle-off fa-toggle-on';

    //                    document.getElementById('topimage').src='/asset/shape-top-black-80.png'; 
    //                    document.getElementById('topdark').src='/asset/shape-top-dark-grey-80.png';
    //                    document.getElementById('bottomdark').src='/asset/shape-top-dark-grey-80.png';
    // }


    // light mood

    // function lightmood () 
    // else {
    //     document.getElementById('themestyle').setAttribute('href', '/index.css/light.css');
    //     document.getElementById('toggle').className = 'fa-solid fa-toggle-on toggleon';
    //     document.getElementById('topimage').src = '/asset/shape-top-white-80.png';
    //     document.getElementById('topdark').src = '/asset/shape-top-grey-80.png';
    //     document.getElementById('bottomdark').src = '/asset/shape-top-grey-80.png';
    // }

