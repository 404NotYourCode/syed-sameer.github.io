/\* ========== styles.css ========== \*/
@import url('[https://fonts.googleapis.com/css2?family=Inter\:wght@300;400;600;700\&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap)');

\:root {
\--clr-bg: #0d1117;
\--clr-bg-alt: #161b22;
\--clr-text: #c9d1d9;
\--clr-accent: #58a6ff;
\--clr-accent-hover: #1f6feb;
\--transition: 0.3s ease;
}

\*, \*::before, \*::after { box-sizing: border-box; }
body {
margin: 0; padding: 0;
font-family: 'Inter', sans-serif;
background: var(--clr-bg);
color: var(--clr-text);
scroll-behavior: smooth;
}
.container { width: min(90%, 1200px); margin: auto; }

/\* NAVIGATION \*/
nav.nav {
position: fixed; width: 100%; top: 0;
background: rgba(13,17,23,0.85);
backdrop-filter: blur(5px);
padding: 1rem 0;
z-index: 1000;
}
.nav\_\_container { display: flex; align-items: center; justify-content: space-between; }
nav a.logo { font-size: 1.8rem; font-weight: 700; color: var(--clr-accent); text-decoration: none; }
.nav\_\_links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
.nav\_\_links a { color: var(--clr-text); text-decoration: none; font-weight: 500; transition: var(--transition); }
.nav\_\_links a\:hover { color: var(--clr-accent); }
.menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; color: var(--clr-text); }
\#mode-toggle { background: none; border: none; font-size: 1.2rem; color: var(--clr-text); cursor: pointer; }

/\* HERO SECTION \*/
.hero {
height: 100vh;
position: relative;
display: flex; align-items: center;
justify-content: center;
text-align: center;
overflow: hidden;
}
.hero\_\_content { position: relative; z-index: 5; }
.hero h1 { font-size: 3rem; margin: 0; }
.hero p { font-size: 1.2rem; margin: 1rem 0; opacity: 0.8; }
.btn {
display: inline-block;
padding: 0.75rem 1.5rem;
border-radius: 50px;
background: var(--clr-accent);
color: var(--clr-bg);
text-decoration: none;
font-weight: 600;
transition: var(--transition);
}
.btn\:hover { background: var(--clr-accent-hover); }

/\* SECTIONS \*/
.section { padding: 6rem 0; }
.section--dark { background: var(--clr-bg-alt); }
.section h2 {
font-size: 2rem;
text-align: center;
margin-bottom: 2rem;
color: var(--clr-accent);
}

/\* SKILLS & PROJECTS GRIDS \*/
.skills\_\_grid, .projects\_\_grid {
display: grid; gap: 2rem;
}
.skills\_\_grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
.skill {
background: var(--clr-bg);
padding: 1.5rem;
border-radius: 10px;
text-align: center;
font-weight: 600;
box-shadow: 0 4px 8px rgba(0,0,0,0.3);
transition: var(--transition);
}
.skill\:hover { transform: translateY(-5px); }

.projects\_\_grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.project-card {
background: var(--clr-bg);
padding: 1.5rem;
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.1);
transition: var(--transition);
}
.project-card\:hover {
transform: translateY(-5px);
box-shadow: 0 8px 16px rgba(0,0,0,0.4);
}
.project-card h3 { margin-top: 0; color: var(--clr-accent); }
.project-card p { margin: 1rem 0; opacity: 0.85; }
.project-card .link { font-weight: 500; text-decoration: none; color: var(--clr-accent); }

/\* CONTACT FORM \*/
.contact-form {
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 500px;
margin: auto;
}
.contact-form input,
.contact-form textarea {
padding: 0.8rem;
border: none;
border-radius: 8px;
}

/\* FOOTER \*/
.footer { text-align: center; padding: 2rem 0; opacity: 0.6; }

/\* PARTICLE CANVAS \*/
\#particle-canvas {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

/\* SCRIPT.JS \*/
// Initialize AOS Animations
AOS.init({ duration: 800, once: true });

// Typed.js Headline Effect
const typed = new Typed('#typed-text', {
strings: \['Cybersecurity Engineer.', 'Ethical Hacker.', 'Network Defender.'],
typeSpeed: 80,
backSpeed: 50,
loop: true
});

// GSAP ScrollTrigger Section Reveals
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section').forEach((section) => {
gsap.from(section, {
scrollTrigger: {
trigger: section,
start: 'top 80%'
},
y: 50,
opacity: 0,
duration: 1,
ease: 'power3.out'
});
});

// Particle Background Canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = \[];

function resizeCanvas() {
canvas.width = window\.innerWidth;
canvas.height = window\.innerHeight;
}

window\.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
constructor() {
this.x = Math.random() \* canvas.width;
this.y = Math.random() \* canvas.height;
this.size = Math.random() \* 2 + 1;
this.velX = Math.random() \* 0.5 - 0.25;
this.velY = Math.random() \* 0.5 - 0.25;
}

update() {
this.x += this.velX;
this.y += this.velY;
if (this.x < 0 || this.x > canvas.width) this.velX \*= -1;
if (this.y < 0 || this.y > canvas.height) this.velY \*= -1;
}

draw() {
ctx.fillStyle = 'rgba(88,166,255,0.5)';
ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI \* 2);
ctx.fill();
}
}

for (let i = 0; i < 150; i++) {
particles.push(new Particle());
}

function animateParticles() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
particles.forEach((p) => {
p.update();
p.draw();
});
requestAnimationFrame(animateParticles);
}

animateParticles();

// Dark/Light Mode Toggle
const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', () => {
document.body.classList.toggle('light');
modeToggleBtn.innerHTML = document.body.classList.contains('light')
? '<i class="fas fa-sun"></i>'
: '<i class="fas fa-moon"></i>';
});

// Mobile Menu Toggle
const menuToggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav\_\_links');
menuToggleBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close Menu on Link Click
document.querySelectorAll('.nav\_\_links a').forEach((link) => {
link.addEventListener('click', () => {
navLinks.classList.remove('open');
});
});
