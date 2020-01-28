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

slideContainer.style.width = `${numSlides * 100}%`;
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
    activeSlide = numSlides;
    console.log("left click: " + ((activeSlide * slideRatio) - slideRatio));
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio) - slideRatio}%, 0, 0)`;
  } 
  else if( activeSlide > 1 && activeSlide < numSlides) {
    activeSlide--;
    console.log("left click: " + ((activeSlide * slideRatio) - slideRatio));
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio) - slideRatio}%,0,0)`;
  } 
  else if (activeSlide === numSlides) {
    activeSlide--;
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio) - slideRatio}%,0,0)`;
    console.log("left click: " + ((activeSlide * slideRatio) - slideRatio));
  }
});

rightArrow.addEventListener('click', function() {
  
  if(activeSlide === 1) {
    activeSlide++;
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio) - slideRatio}%,0,0)`;
    console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  } 
  else if(activeSlide > 1 && activeSlide < numSlides) {
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio)}%,0,0)`;
    activeSlide++;
    console.log("right click: " + ((activeSlide * slideRatio)));
  }
  else if (activeSlide === numSlides) {
    activeSlide = 1;
    slideContainer.style.transform = `translate3d(-${(activeSlide * slideRatio) - slideRatio}%,0,0)`;
    console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  }
  
});


console.log(slidesArr);