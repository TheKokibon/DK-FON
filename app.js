document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("change");
    document.querySelector(".navbar").classList.toggle("active");
  });

//Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "number"
  const numbers = document.querySelectorAll(".number");

  // Loop through each element
  numbers.forEach((number) => {
    // Get the final value from the inner text of the element
    const finalValue = parseInt(number.innerText);
    // Set the initial value to 0
    let currentValue = 0;
    // Create an interval to increment the value every 50 milliseconds
    const interval = setInterval(() => {
      // Increment the value
      currentValue++;
      // Update the inner text of the element
      number.innerText = currentValue;
      // If the current value reaches the final value, clear the interval
      if (currentValue >= finalValue) {
        clearInterval(interval);
      }
    }, 200);
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});
