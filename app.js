// ======= Mobile Menu Toggle =======
const menu = document.querySelector('#mobile-menu');
const menuLinksContainer = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const toggleMobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinksContainer.classList.toggle('active');
};

menu.addEventListener('click', toggleMobileMenu);

// ======= Highlight Menu Items on Scroll =======
const sections = document.querySelectorAll('div[id]'); // all sections with ids
const menuLinks = document.querySelectorAll('.navbar__links');

const highlightMenu = () => {
  const scrollPos = window.scrollY + 100; // offset for better highlighting
  let highlighted = false;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const menuLink = document.querySelector(`#${section.id}-page`);

    if (scrollPos >= top && scrollPos < bottom) {
      menuLinks.forEach(link => link.classList.remove('highlight'));
      if (menuLink) menuLink.classList.add('highlight');
      highlighted = true;
    }
  });

  // If no section matches (top of page), remove highlight
  if (!highlighted) {
    menuLinks.forEach(link => link.classList.remove('highlight'));
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// ======= Close Mobile Menu on Click =======
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.remove('is-active');
    menuLinksContainer.classList.remove('active');
  }
};

menuLinksContainer.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// ======= Clock Update =======
const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const country = 'Ireland';
  hours = hours % 12 || 12;
  document.getElementById('clock').textContent = `${country} | ${hours}:${minutes} ${ampm}`;
};

updateTime();
setInterval(updateTime, 1000);
