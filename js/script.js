runEvents();

function runEvents() {
  // Header Transition on scroll
  window.addEventListener("scroll", changeMainHeaderStyle);

  // Toggle about tabs
  document
    .querySelector(".content .buttons")
    .addEventListener("click", toggleAboutTab);

  window.addEventListener("orientationchange", orientationAdvisor);

}




// Smooth Scrolling
// This code is jQuery so use the minified CDN in the html code
$(
  "#home-header .main-menu a, #home-header .menu-wrap .menu a, #home-showcase .indicator a, #home-showcase .buttons a, #home-main-footer .navigation a, #showcase a"
).on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 10,
      },
      800
    );
  }
});


// Change the main header styling on page scroll
function changeMainHeaderStyle() {
  if (window.scrollY > 40) {
    document.querySelector("#home-header").style.borderBottomColor =
      "#fb841b33";
    document.querySelector("#home-header").style.height = "60px";
    document.querySelector("#home-header .top-section").style.maxHeight = "0%";
    document.querySelector("#home-header .bottom-section").style.height =
      "100%";
    document.querySelector(
      "#home-header .bottom-section .menu-wrap"
    ).style.height = "100%";
    // > Brand Logo
    document.querySelector("#home-header .branding img").style.width = "2rem";
    document.querySelector("#home-header h1 a").style.fontSize = "1rem";
  } else {
    document.querySelector("#home-header").style.borderBottomColor =
      "transparent";
    document.querySelector("#home-header").style.height = "90px";
    document.querySelector("#home-header .top-section").style.maxHeight = "45%";

    document.querySelector("#home-header .bottom-section").style.height = "55%";
    document.querySelector(
      "#home-header .bottom-section .menu-wrap"
    ).style.height = "100%";

    // > Brand Logo
    document.querySelector("#home-header .branding img").style.width = "2.5rem";
    document.querySelector("#home-header h1 a").style.fontSize = "1.2rem";

    // > Using media queries to style header on smartphones
    var x = window.matchMedia("(max-width: 1100px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
    function myFunction(x) {
      if (x.matches) {
        document.querySelector("#home-header .bottom-section").style.height =
          "100%";
      } else {
        document.querySelector("#home-header .bottom-section").style.height =
          "55%";
      }
    }
  }
}

$(function () {
  $('#WAButton').floatingWhatsApp({
      phone: '+233201083653', //WhatsApp Business phone number
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: 'Hello, We care about your eyes', //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="./images/whatsapp.png" />', //Button Image
      //headerColor: 'crimson', //Custom header color
      //backgroundColor: 'crimson', //Custom background button color
      position: "right" //Position: left | right

  });
});

// slider or carousell
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next '),
  prevArrow: $('.prev '),
  //making the slider responsive
  responsive: [
  {
  breakpoint: 1366,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true
  }
  },
  {
  breakpoint: 1025,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 2
  }
  },
  {
  breakpoint: 535,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });
  
//  Services Swiper
var swiper = new Swiper(".main-content .swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Toggle about tabs
function toggleAboutTab(e) {
  const buttons = document.querySelectorAll(".content .buttons button");

  const panels = document.querySelectorAll(".content .panels div");

  // > Check the selected button
  buttons.forEach((button) => {
    if (e.target.className === button.className) {
      // > Save selected button className
      const selectedBtnClass = button.className;
      // > Change button background color
      button.style.backgroundColor = "#c90570";

      // > Compare selected button to its marching panel
      panels.forEach((panel) => {
        if (panel.classList.contains(selectedBtnClass)) {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
      });
    } else {
      button.style.backgroundColor = "#5C5C5C";
    }
  });
}







// Advice user on landscape orientation
function orientationAdvisor() {
  if (window.innerWidth > window.innerHeight) {
    // > Using media queries to style header on smartphones
    var x = window.matchMedia("(max-height: 500px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
    function myFunction(x) {
      if (x.matches) {
        document.querySelector("body .alert-div").style.display = "block";
      } else {
        document.querySelector("body .alert-div").style.display = "none";
      }
    }
  }
}

