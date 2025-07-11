// Balloon colors
const colors = [
  "#FC7CFF", "#FF9F56", "#FFFA7C", "#8BE9FF", "#63FFD6", "#FF7C7C", "#B1FF7C", "#7C83FF", "#FFDA7C"
];

// Create Balloons and Glitters
function createBalloonAndGlitter() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.color = colors[Math.floor(Math.random()*colors.length)];
  balloon.style.left = `${Math.random() * 92}vw`;
  balloon.style.animationDuration = `${3 + Math.random()*2}s`;
  balloon.style.width = `${36 + Math.random()*28}px`;
  balloon.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 60 90">
    <ellipse cx="30" cy="38" rx="25" ry="34" fill="currentColor"/>
    <rect x="27" y="75" width="6" height="12" rx="3" fill="#a58c7f"/>
    <path d="M30,75 Q32,80 30,90 Q28,80 30,75" stroke="#fff" stroke-width="2" fill="none"/>
  </svg>`;
  document.getElementById('balloon-container').appendChild(balloon);
  setTimeout(() => balloon.remove(), 5500);

  // Add a few glitters per balloon
  for(let i=0; i<3; i++) {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    glitter.style.left = `${parseFloat(balloon.style.left) + Math.random()*3 - 1.5}vw`;
    glitter.style.bottom = `${Math.random()*100}px`;
    glitter.style.animationDuration = `${2 + Math.random()*1.5}s`;
    document.getElementById('glitter-container').appendChild(glitter);
    setTimeout(() => glitter.remove(), 3700);
  }
}

// Animate balloons + glitters on page load
for(let i=0; i<24; i++) {
  setTimeout(createBalloonAndGlitter, i*210 + Math.random()*120);
}

// Music
const music = document.getElementById('birthday-music');
music.volume = 0.2;

// Animate text, door handled by CSS

// Set friend name
document.getElementById('friend-name').textContent = "Your Friend's Name";

// Slideshow logic
const slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === idx) ? 'block' : 'none';
  });
}
showSlide(currentSlide);

prevBtn.onclick = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};
nextBtn.onclick = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

// Optional: show door after balloons
setTimeout(() => {
  document.getElementById('door').style.opacity = 1;
}, 5000);

// Teddy Bear SVGs
document.querySelector('.teddy-tl').innerHTML = teddySVG();
document.querySelector('.teddy-tr').innerHTML = teddySVG();
document.querySelector('.teddy-bl').innerHTML = teddySVG();
document.querySelector('.teddy-br').innerHTML = teddySVG();

function teddySVG() {
  return `
  <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none">
    <circle cx="18" cy="18" r="10" fill="#F7C9A9" stroke="#D9996B" stroke-width="2"/>
    <circle cx="42" cy="18" r="10" fill="#F7C9A9" stroke="#D9996B" stroke-width="2"/>
    <ellipse cx="30" cy="32" rx="18" ry="16" fill="#F7C9A9" stroke="#D9996B" stroke-width="2"/>
    <ellipse cx="30" cy="46" rx="7" ry="5" fill="#fff"/>
    <circle cx="25" cy="30" r="2" fill="#502D16"/>
    <circle cx="35" cy="30" r="2" fill="#502D16"/>
    <ellipse cx="30" cy="36" rx="3" ry="1.5" fill="#502D16"/>
  </svg>
  `;
}