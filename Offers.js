const carousel = document.querySelector(".offers .carousel");

let isDragging = false;
let isVerticalScroll = false;
let startX = 0;
let startY = 0;
let slidesInView;
let SlidesPerView;


let totalRealSlides = document.querySelectorAll(".slide").length;

let N;

N = 2 * document.querySelectorAll(".slide").length;

for (let i = 0; i < N; i++) {

 let clone = document.querySelectorAll(".slide")[i % document.querySelectorAll(".slide").length].cloneNode(true);

 carousel.appendChild(clone);

}


let P = 0;
let centralSlide = totalRealSlides + 1;
let currentIndex = centralSlide;


function updateLayout() {

 SlidesPerView = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--x"));

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;
  
 }

}


updateLayout();
window.addEventListener("resize", updateLayout);


function appendSlides() {

  const slides = carousel.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {

    slides[i].style.transition = "none";
    carousel.append(slides[i]);
    
  }

  currentIndex -= SlidesPerView;

}


function prependSlides() {

  const slides = carousel.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {
    
    slides[i].style.transition = "none";
    carousel.prepend(slides[slides.length - i - 1]);

  }

  currentIndex += SlidesPerView;

}


function forward() {

 currentIndex += SlidesPerView;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

 }

}


function backward() {

 currentIndex -= SlidesPerView;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

 }

}


function dragStart(e) {

 stopAutoplay();
 carousel.style.cursor="grab";

 isDragging = false;
 isVerticalScroll = false;

 document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0s");

 if(currentIndex > centralSlide){appendSlides();}
 if(currentIndex < centralSlide){prependSlides();}

 startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
 startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

}


function dragging(e) {

 if (isVerticalScroll) return;
 carousel.style.cursor="grabbing";

 let dx;
 let dy;

 dx = e.type.includes("touch") ? e.touches[0].clientX - startX : e.clientX - startX;
 dy = e.type.includes("touch") ? e.touches[0].clientY - startY : e.clientY - startY;
 

 // Detect vertical scroll intent
 if (!isDragging && Math.abs(dy) > Math.abs(dx) && carousel.classList.contains("touch")) {

   isVerticalScroll = true;
   document.body.style.overflowY="auto";

   return;

 }else{
  
   document.body.style.overflowY="hidden";
  
 }


 isDragging = true;

 P = dx;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap) + ${dx}px)`;
  
 }


}

function dragEnd() {

 carousel.style.cursor="grab";

 if(!isDragging) return;
 isDragging = false;

 document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0.4s");

 if(P >= -60 && P <= 60){

   for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

     document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

   }

  }else if(P > 60){

   backward();

  }else if(P < -60) {

   forward();

  }

 resetAutoplayDelay();

}


// Touch Events
carousel.addEventListener('touchstart', (e) => {dragStart(e);});
carousel.addEventListener('touchmove', (e) => {dragging(e);});
carousel.addEventListener('touchend', dragEnd);

let isMouseDown = false;

// Mouse Events
carousel.addEventListener('mousedown', (e) => {
isMouseDown = true;
dragStart(e);
});

carousel.addEventListener('mousemove', (e) => {
if (!isMouseDown) return;
dragging(e);
});

carousel.addEventListener('mouseup', () => {
if (!isMouseDown) return;
isMouseDown = false;
dragEnd();
});

carousel.addEventListener('mouseleave', () => {
if (!isMouseDown) return;
isMouseDown = false;
dragEnd();
});


// Autoplay logic
let autoplayTimer = null;
let autoplayInterval = 3000;
let idleTimeout = null;

function startAutoplay() {

 if (autoplayTimer) return;

 autoplayTimer = setInterval(() => {

   document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0.4s");

   appendSlides();
   forward();

 }, autoplayInterval);

}


function stopAutoplay() {

  clearInterval(autoplayTimer);
  autoplayTimer = null;
  clearTimeout(idleTimeout);

}

function resetAutoplayDelay() {

  stopAutoplay();
  clearTimeout(idleTimeout);

  idleTimeout = setTimeout(() => {
    startAutoplay();
  }, 5000);

}

resetAutoplayDelay();