const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

const certCards = document.querySelectorAll('.cert-card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

certCards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.querySelector('h3')?.textContent || '';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = title;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = 'Thanks! Your message has been noted (connect this form to a backend or Formspree to actually receive emails).';
  contactForm.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
