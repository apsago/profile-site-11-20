// global variables
let indexCounter = 0;

const slides = [
    { src: 'testimonial1.png'},
    { src: 'testimonial2.png'},
    { src: 'testimonial3.png'},
];

const imgEL = document.getElementById('slider-img2');

const SLIDE_MS = 6000; // slow way down (6s)

function show(idx) {
  const s = slides[idx];
  imgEL.src = s.src;
}

show(indexCounter); // show first slide immediately

setInterval(() => {
  indexCounter = (indexCounter + 1) % slides.length;
  show(indexCounter);
}, SLIDE_MS);