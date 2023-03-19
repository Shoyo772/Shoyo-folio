// Sélection des éléments de la navigation
const navToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Fonction pour activer/désactiver le menu
function toggleMenu() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Ajout d'un événement pour cliquer sur l'icône du menu
navToggle.addEventListener('click', toggleMenu);

// Fermer le menu lorsqu'un lien est cliqué
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Ajout d'un effet de transition sur la navigation
function animateNavLinks() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
}

// Ajout d'un événement pour afficher les liens avec un effet de transition
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    animateNavLinks();
  }
});

