var typed = new Typed(".text", {
  strings: ["Front-end Developer", "Graphic Designer", "Web Developer"],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

window.onload = function () {
    if (window.matchMedia("(min-width: 940px)").matches) {
      // Assuming `sections` is an array of section elements
      let sections = document.querySelectorAll("section");
  
      window.onscroll = function () {
        sections.forEach((sec) => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 300;
          let height = sec.offsetHeight;
  
          if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
          } else {
            sec.classList.remove("show-animate");
          }
        });
        console.log("Scrolling...");
      };
    }
  };
  
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.getElementById("header").classList.add("hidden");
    // document.getElementById("scroll-up").classList.remove("hidden");
    document.getElementById("navBottom").classList.remove("hidden");
    document.getElementById("navbar").classList.add("hidden");
  } else {
    // Scroll up
    document.getElementById("header").classList.remove("hidden");
    // document.getElementById("scroll-up").classList.add("hidden");
    document.getElementById("navBottom").classList.add("hidden");
    document.getElementById("navbar").classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

let menuVisible = false;

function menuBar(event) {
  event.preventDefault();

  const navbar = document.getElementById("navbar");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  if (!menuVisible) {
    navbar.style.transform = "translateY(30px)";
    navbar.style.opacity = "1";
    navbar.style.transition = ".5s";
    bar1.style.transform = "rotate(45deg)";
    bar3.style.transform = "rotate(-45deg)";
    bar3.style.position = "absolute";
    bar3.style.margin = "-7px 0 0 0";
    bar2.style.display = "none";
    bar1.style.transition = ".4s";
    bar3.style.transition = ".4s";
  } else {
    navbar.style.transform = "translateY(-100%)";
    bar1.style.transform = "rotate(0)";
    bar3.style.transform = "rotate(0)";
    bar3.style.position = "absolute";
    bar3.style.margin = "0";
    bar2.style.display = "block";
  }

  menuVisible = !menuVisible;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


document.addEventListener('DOMContentLoaded', (event) => {
  let lastScrollTop = 0;
  const arrow = document.querySelector('.arrow-up');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Downscroll
      arrow.style.display = 'block';
      arrow.transition= '0.3s ease-in-out';
    } else {
      // Upscroll
      arrow.style.display = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});


// Scroll to top smoothly
document.querySelector('.arrow-up a').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
