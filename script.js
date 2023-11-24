const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

function submitQuiz() {
  calculateScore();
  const confirmationSound = document.getElementById('confirmationSound');
  confirmationSound.play();
}
        function calculateScore() {
          let score = 0;
          const q1Answer = document.querySelector('input[name="q1"]:checked');
          if (q1Answer && q1Answer.value == 'JavaScript') {
            score++;
          }
          const q2Answer = document.querySelector('input[name="q2"]:checked');
          if (q2Answer && q2Answer.value == 'Jupiter') {
            score++;
          }
          const q3Answer = document.querySelector('input[name="q3"]:checked');
          if (q3Answer && q3Answer.value == 'AITU') {
            score++;
          }
          const q4Answer = document.querySelector('input[name="q4"]:checked');
          if (q4Answer && q4Answer.value == 'Media Technologies') {
            score++;
          }
          const q5Answer = document.querySelector('input[name="q5"]:checked');
          if (q5Answer && q5Answer.value == 'Ayazhan') {
            score++;
          }
          const resultElement = document.getElementById('result');
          resultElement.textContent = `Your score is ${score} out of 5.`;
        }
