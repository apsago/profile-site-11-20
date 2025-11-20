// global variables
let indexCounter = 0;

const slides = [
    { src: 'patch.png', caption: 'Reporting: Patching up the gap: Moms in prison reconnect with their kids during family visits' },
    { src: 'hobbyhorse.png', caption: 'Reporting: Dubuque teen wins at first U.S. Hobby Horse Championships' },
    { src: 'colleges.png', caption: 'Data Visualizations/Reporting: Amid rising college closures, students, higher education experts talk financial red flags' },
    { src: 'abortionstory.png', caption: 'Reporting: MO spends millions on abortion alternatives. Could the federal government crack down?'},
    { src: 'map.png', caption: 'Data Visualization: Missouri splits Kansas City in new redistricting plan' },
];

const imgEL = document.getElementById('slider-img');
const capEL = document.getElementById('slider-caption');

const SLIDE_MS = 6000; // slow way down (6s)

function show(idx) {
  const s = slides[idx];
  imgEL.src = s.src;
  capEL.textContent = s.caption;
}

show(indexCounter); // show first slide immediately

setInterval(() => {
  indexCounter = (indexCounter + 1) % slides.length;
  show(indexCounter);
}, SLIDE_MS);