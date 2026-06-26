const wrapper = document.querySelector(".offers .wrapper");
const slider = document.querySelector(".offers .carousel");

let isDragging = false;
let isVerticalScroll = false;
let startX = 0;
let startY = 0;
let slidesInView;
let SlidesPerView;


// Check if the user uses touch screen or not
if ("ontouchstart" in document.documentElement) {
  slider.classList.add("touch");
  slider.classList.remove("mouse");
} else {
  slider.classList.add("mouse");
  slider.classList.remove("touch");
}

let totalRealSlides = document.querySelectorAll(".slide").length;

let N;

N = 2 * document.querySelectorAll(".slide").length;

for (let i = 0; i < N; i++) {
let clone = document.querySelectorAll(".slide")[i % document.querySelectorAll(".slide").length].cloneNode(true);
slider.appendChild(clone);
}

let P = 0;
let y1 = 1;
let y2 = 2;
let C = totalRealSlides + 1;
let x = C;

function updateLayout() {

    const wrapperWidth = wrapper.clientWidth;
    const slides = document.querySelectorAll(".offers .carousel li");

    let slideWidth;

    if (wrapperWidth < 600) {

        SlidesPerView = 1;

        slideWidth = wrapperWidth - 80;

    } else if (wrapperWidth < 1000) {

        SlidesPerView = 2;

        slideWidth = (wrapperWidth - 100) / 2;

    } else if (wrapperWidth < 1500) {

        SlidesPerView = 3;

        slideWidth = (wrapperWidth - 120) / 3;

    } else {

        SlidesPerView = 4;

        slideWidth = (wrapperWidth - 140) / 4;

    }

    slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`;
    });

SlideWidth = slideWidth + 20;

for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

document.querySelectorAll(".slide")[i].style.left=`calc(${i - x}*(${SlideWidth}px) + 40px)`;
  
}

}

updateLayout();
window.addEventListener("resize", updateLayout);

function appendSlides() {

  const slides = slider.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {

    slides[i].style.transition = "none";
    slider.append(slides[i]);
  }

  x -= SlidesPerView;
}

function prependSlides() {

  const slides = slider.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {
    
    slides[i].style.transition = "none";
    slider.prepend(slides[document.querySelectorAll(".slide").length - i - 1]);
  }

  x += SlidesPerView;
}

function forward() {

for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
document.querySelectorAll(".slide")[i].style.left=`calc(${(i - x - SlidesPerView)*SlideWidth}px + 40px)`;

}

x += SlidesPerView;

}

function backward() {

for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
document.querySelectorAll(".slide")[i].style.left=`calc(${(i - x + SlidesPerView)*SlideWidth}px + 40px)`;

}

x -= SlidesPerView;

}

function dragStart(e) {

stopAutoplay();
slider.style.cursor="grab";
isDragging = false;
isVerticalScroll = false;

document.querySelectorAll(".slide").forEach(Slide => {
Slide.style.transition="0s";});

if(x > C){appendSlides();}

if(x < C){prependSlides();}

startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

}

function dragging(e) {

if (isVerticalScroll) return; // stop drag if already determined vertical scroll
slider.style.cursor="grabbing";

let dx;
let dy;

dx = e.type.includes("touch") ? e.touches[0].clientX - startX : e.clientX - startX;
dy = e.type.includes("touch") ? e.touches[0].clientY - startY : e.clientY - startY;
 

// Detect vertical scroll intent
if (!isDragging && Math.abs(dy) > Math.abs(dx) && slider.classList.contains("touch")) {
isVerticalScroll = true;
document.body.style.overflowY="auto";
return; // stop horizontal dragging
}else{document.body.style.overflowY="hidden";}


isDragging = true;

P = dx;

for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

document.querySelectorAll(".slide")[i].style.left=`calc(calc(${i - x}*(${SlideWidth}px) + 40px + ${dx}px))`;
  
}

}

function dragEnd() {

slider.style.cursor="grab";
if(!isDragging) return;

isDragging = false;

document.querySelectorAll(".slide").forEach(Slide => {
Slide.style.transition="0.4s";});

if(P >= -60 && P <= 60){

for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

document.querySelectorAll(".slide")[i].style.left=`calc(calc(${i - x}*(${SlideWidth}px) + 40px))`;

}

}else if(P > 60){

backward();

}else if(P < -60) {

forward();

}

resetAutoplayDelay();

}


// Touch Events
slider.addEventListener('touchstart', (e) => {dragStart(e);});
slider.addEventListener('touchmove', (e) => {dragging(e);});
slider.addEventListener('touchend', dragEnd);

let isMouseDown = false;

// Mouse Events
slider.addEventListener('mousedown', (e) => {
isMouseDown = true;
dragStart(e);
});

slider.addEventListener('mousemove', (e) => {
if (!isMouseDown) return;
dragging(e);
});

slider.addEventListener('mouseup', (e) => {
if (!isMouseDown) return;
isMouseDown = false;
dragEnd();
});

slider.addEventListener('mouseleave', () => {
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

document.querySelectorAll(".slide").forEach(Slide => {
Slide.style.transition="0.4s";});

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
