const track = document.querySelector(".carousel__track");
const slides = document.querySelectorAll(".carousel__slide");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";
slides[2].style.left = slideWidth * 2 + "px";

const setPosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setPosition);

nextButton.addEventListener("click", () => {
  const currentSlide = document.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amtToMove = nextSlide.style.left;
  track.style.transform = "translateX(-" + amtToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});

prevButton.addEventListener("click", () => {
  const currentSlide = document.querySelector(".current-slide");
  const nextSlide = currentSlide.previousElementSibling;
  const amtToMove = nextSlide.style.left;
  track.style.transform = "translateX(" + amtToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});
