var carousel = document.querySelector('.flying--carousel');
var slideContainer = document.querySelector('.slides');
var slides = document.querySelectorAll('.slide');
var slidesArr = slideContainer.children;
var leftArrow = document.querySelector('.gg-arrow-left-o');
var rightArrow = document.querySelector('.gg-arrow-right-o');
var activeSlide = 1;
let reloop = false;
let numSlides = slides.length;
let slideRatio = 100 / numSlides;

function findActiveSlide(){
  slides[activeSlide].classList.remove('active');
  if(activeSlide < slides.length) {
    activeSlide++;
  } else if(activeSlide === slides.length && reloop === true){
    activeSlides = 0;
    reloop = false;
  }
  
  slides[activeSlide].classList.add('active');
}

leftArrow.addEventListener('click', function() {
  if(activeSlide === 1) {
    slideContainer.style.transform = `translate(-${slideRatio * 2}%)`;
    activeSlide = numSlides;
    console.log(activeSlide);
  } else if( activeSlide > 1 && activeSlide < numSlides) {
    slideContainer.style.transform = 'translate(0)';
    activeSlide--;
    console.log(activeSlide);
  } else if (activeSlide === numSlides) {
    slideContainer.style.transform = `translate(-${slideRatio}%)`;
    activeSlide--;
    console.log(activeSlide);
    // reloop = true;
  }
});

rightArrow.addEventListener('click', function() {
  
  if(activeSlide === 1) {
    slideContainer.style.transform = `translate(-${slideRatio}%)`;
    activeSlide = 2;
    console.log(activeSlide);
    // findActiveSlide();
  } else if(activeSlide > 1 && activeSlide < numSlides) {
    slideContainer.style.transform = `translate(-${slideRatio * 2}%)`;
    console.log(activeSlide);
    activeSlide++;
    // findActiveSlide();
  } else if (activeSlide === numSlides) {
    console.log(activeSlide);
    slideContainer.style.transform = 'translate(0)';
    activeSlide = 1;
    // reloop = true;
    // findActiveSlide();
  }
  
});


console.log(slidesArr);